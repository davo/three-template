import { WebGLRenderer } from "three";
import prettyMs from "pretty-ms";
import loadImage from "image-promise";
import { omit, mapValues } from "lodash-es";
import loadTexture from "./loadTexture";
import loadEnvMap from "./loadEnvMap";
import loadGLTF from "./loadGLTF";

type AssetType = "gltf" | "json" | "svg" | "image" | "audio" | "video" | "texture" | "envmap" | "envMap" | "env-map";

interface QueueItem {
  url: string;
  type: AssetType;
  key?: string;
  [key: string]: any;
}

type ProgressListener = (progress: number) => void;

class AssetManager {
  #queue: QueueItem[] = [];
  #loaded: { [key: string]: any } = {};
  #onProgressListeners: ProgressListener[] = [];
  #logs: { type: "log" | "error"; text: any[] }[] = [];

  addProgressListener(fn: ProgressListener) {
    if (typeof fn !== "function") {
      throw new TypeError("onProgress must be a function");
    }
    this.#onProgressListeners.push(fn);
  }

  queue({ url, type, ...options }: { url: string; type?: AssetType, [key: string]: any }): string {
    if (!url) {
      throw new TypeError("Must specify a URL or opt.url for AssetManager.queue()");
    }

    const queued = this._getQueued(url);
    if (queued) {
      const queuedOptions = omit(queued, ["url", "type", "key"]);
      if (JSON.stringify(options) !== JSON.stringify(queuedOptions)) {
        const hash = performance.now().toFixed(3).replace(".", "");
        const key = `${url}.${hash}`;
        this.#queue.push({
          key,
          url,
          type: type || this._extractType(url),
          ...options,
        });
        return key;
      }
      return queued.key || queued.url;
    }

    const item = { url, type: type || this._extractType(url), ...options };
    this.#queue.push(item);
    return item.key || item.url;
  }

  queueStandardMaterial(maps: { [key: string]: string }, options = {}): { [key: string]: string } {
    const keys: { [key: string]: string } = {};

    const linearTextures = [
      "pbrMap", "alphaMap", "aoMap", "bumpMap", "displacementMap", "lightMap",
      "metalnessMap", "roughnessMap", "clearcoatMap", "clearcoatNormalMap",
      "clearcoatRoughnessMap", "sheenRoughnessMap", "sheenColorMap",
      "specularIntensityMap", "specularColorMap", "thicknessMap", "transmissionMap",
    ];

    Object.keys(maps).forEach((map) => {
      keys[map] = this.queue({
        url: maps[map],
        type: "texture",
        ...options,
        ...(!linearTextures.includes(map) && { gamma: true }),
      });
    });

    return keys;
  }

  _getQueued(url: string): QueueItem | undefined {
    return this.#queue.find((item) => item.url === url);
  }

  _extractType(url: string): AssetType {
    const ext = url.slice(url.lastIndexOf("."));

    switch (true) {
      case /\.(gltf|glb)$/i.test(ext):
        return "gltf";
      case /\.json$/i.test(ext):
        return "json";
      case /\.svg$/i.test(ext):
        return "svg";
      case /\.(jpe?g|png|gif|bmp|tga|tif)$/i.test(ext):
        return "image";
      case /\.(wav|mp3)$/i.test(ext):
        return "audio";
      case /\.(mp4|webm|ogg|ogv)$/i.test(ext):
        return "video";
      default:
        throw new Error(`Could not load ${url}, unknown file extension!`);
    }
  }

  get = (key: string): any => {
    if (!key) throw new TypeError("Must specify an URL for AssetManager.get()");
    return this.#loaded[key];
  };

  getStandardMaterial = (keys: { [key: string]: string }): { [key: string]: any } => {
    return mapValues(keys, (key) => this.get(key));
  };

  async loadSingle({ renderer, ...item }: { renderer: WebGLRenderer } & QueueItem): Promise<string | undefined> {
    if (!renderer) {
      throw new Error("You must provide a renderer to the loadSingle function.");
    }

    try {
      const itemLoadingStart = performance.now();
      const key = item.key || item.url;
      if (!(key in this.#loaded)) {
        this.#loaded[key] = await this._loadItem({ renderer, ...item });
      }

      if (window.DEBUG) {
        console.log(
          `📦 Loaded single asset %c${item.url}%c in ${prettyMs(
            performance.now() - itemLoadingStart,
          )}`,
          "color:blue",
          "color:black",
        );
      }
      return key;
    } catch (err) {
      console.error(`📦 Asset ${item.url} was not loaded:\n${err}`);
    }
  }

  async load({ renderer }: { renderer: WebGLRenderer }) {
    if (!renderer) {
      throw new Error("You must provide a renderer to the load function.");
    }

    const queue = this.#queue.slice();
    this.#queue.length = 0;

    const total = queue.length;
    if (total === 0) {
      setTimeout(() => this.#onProgressListeners.forEach((fn) => fn(1)), 0);
      return;
    }

    const loadingStart = performance.now();

    await Promise.all(
      queue.map(async (item, i) => {
        try {
          const itemLoadingStart = performance.now();
          const key = item.key || item.url;
          if (!(key in this.#loaded)) {
            this.#loaded[key] = await this._loadItem({ renderer, ...item });
          }

          if (window.DEBUG) {
            this.log(
              `Loaded %c${item.url}%c in ${prettyMs(
                performance.now() - itemLoadingStart,
              )}`,
              "color:blue",
              "color:black",
            );
          }
        } catch (err) {
          this.logError(`Asset ${item.url} was not loaded:\n${err}`);
        }

        const percent = (i + 1) / total;
        this.#onProgressListeners.forEach((fn) => fn(percent));
      }),
    );

    if (window.DEBUG) {
      const errors = this.#logs.filter((log) => log.type === "error");
      if (errors.length === 0) {
        this.groupLog(`📦 Assets loaded in ${prettyMs(performance.now() - loadingStart)} ⏱`);
      } else {
        this.groupLog(`📦 %c Could not load ${errors.length} asset${errors.length > 1 ? "s" : ""} `, "color:white;background:red;");
      }
    }
  }

  _loadItem({ url, type, renderer, ...options }: { url: string, type: AssetType, renderer: WebGLRenderer, [key: string]: any }): Promise<any> {
    switch (type) {
      case "gltf":
        return loadGLTF(url, options);
      case "json":
        return fetch(url).then((response) => response.json());
      case "envmap":
      case "envMap":
      case "env-map":
        return loadEnvMap(url, { renderer, ...options });
      case "svg":
      case "image":
        return loadImage(url, { crossorigin: "anonymous" });
      case "texture":
        return loadTexture(url, { renderer, ...options });
      case "audio":
        return fetch(url).then((response) => response.arrayBuffer());
      case "video":
        return fetch(url).then((response) => response.blob());
      default:
        throw new Error(`Could not load ${url}, the type ${type} is unknown!`);
    }
  }

  log(...text: any[]) {
    this.#logs.push({ type: "log", text });
  }

  logError(...text: any[]) {
    this.#logs.push({ type: "error", text });
  }

  groupLog(...text: any[]) {
    console.groupCollapsed(...text);
    this.#logs.forEach((log) => {
      console[log.type](...log.text);
    });
    console.groupEnd();
    this.#logs.length = 0;
  }
}

export default new AssetManager();
