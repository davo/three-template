import {
  Color,
  HalfFloatType,
  OrthographicCamera,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
  WebGLRendererParameters,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "stats.js";
import { getGPUTier, GPUTier } from "detect-gpu";
import { EffectComposer, RenderPass } from "postprocessing";
import CannonDebugger from "cannon-es-debugger";
import loadMP4Module, { isWebCodecsSupported, MP4Module, MP4Encoder } from "mp4-wasm";
import GUI from "lil-gui";
import { ExponentialNumberController } from "../utils/ExponentialNumberController";
import * as CANNON from 'cannon-es';

interface WebGLAppOptions extends WebGLRendererParameters {
  background?: string;
  backgroundAlpha?: number;
  fov?: number;
  frustumSize?: number;
  near?: number;
  far?: number;
  width?: number;
  height?: number;
  maxPixelRatio?: number;
  maxDeltaTime?: number;
  orthographic?: boolean;
  cameraPosition?: Vector3;
  cameraTarget?: Vector3;
  postprocessing?: boolean;
  orbitControls?: boolean | object;
  world?: CANNON.World;
  showWorldWireframes?: boolean;
  showFps?: boolean;
  gui?: boolean | object;
  guiClosed?: boolean;
  sortObjects?: boolean;
  xr?: boolean;
}

type UpdateListener = (dt: number, time: number, xrframe?: any) => void;
type PointerListener = (event: PointerEvent, position: { x: number; y: number; dragX?: number; dragY?: number; }) => void;

export default class WebGLApp {
  #width?: number;
  #height?: number;
  isRunning = false;
  time = 0;
  dt = 0;
  #lastTime = performance.now();
  #updateListeners: UpdateListener[] = [];
  #pointerdownListeners: PointerListener[] = [];
  #pointermoveListeners: PointerListener[] = [];
  #pointerupListeners: PointerListener[] = [];
  #startX?: number;
  #startY?: number;
  #mp4?: MP4Module;
  #mp4Encoder?: MP4Encoder;
  #fileName?: string;
  #frames: ImageBitmap[] = [];

  options: WebGLAppOptions;
  renderer: WebGLRenderer;
  canvas: HTMLCanvasElement;
  maxPixelRatio: number;
  maxDeltaTime: number;
  camera: PerspectiveCamera | OrthographicCamera;
  scene: Scene;
  gl: WebGLRenderingContext;
  isDragging = false;
  composer?: EffectComposer;
  orbitControls?: OrbitControls;
  world?: CANNON.World;
  cannonDebugger?: any;
  stats?: Stats;
  gui?: GUI;
  guiState?: object;
  loadGPUTier: Promise<void>;
  gpu?: GPUTier;

  get background(): Color {
    return this.renderer.getClearColor(new Color());
  }

  get backgroundAlpha(): number {
    return this.renderer.getClearAlpha();
  }

  set background(background: Color | string | number) {
    this.renderer.setClearColor(background, this.backgroundAlpha);
  }

  set backgroundAlpha(backgroundAlpha: number) {
    this.renderer.setClearColor(this.background, backgroundAlpha);
  }

  get isRecording(): boolean {
    return Boolean(this.#mp4Encoder);
  }

  constructor({
    background = "#111",
    backgroundAlpha = 1,
    fov = 45,
    frustumSize = 3,
    near = 0.01,
    far = 100,
    ...options
  }: WebGLAppOptions = {}) {
    this.options = {
      background,
      backgroundAlpha,
      fov,
      frustumSize,
      near,
      far,
      ...options,
    };
    this.renderer = new WebGLRenderer({
      antialias: !this.options.postprocessing,
      alpha: backgroundAlpha !== 1,
      // enabled for recording gifs or videos,
      // might disable it for performance reasons
      preserveDrawingBuffer: true,
      ...this.options,
    });

    if (this.options.sortObjects !== undefined) {
      this.renderer.sortObjects = this.options.sortObjects;
    }
    if (this.options.xr) {
      this.renderer.xr.enabled = true;
    }

    this.canvas = this.renderer.domElement;

    this.renderer.setClearColor(background, backgroundAlpha);

    // save the fixed dimensions
    this.#width = this.options.width;
    this.#height = this.options.height;

    // clamp pixel ratio for performance
    this.maxPixelRatio = this.options.maxPixelRatio || 1.5;
    // clamp delta to avoid stepping anything too far forward
    this.maxDeltaTime = this.options.maxDeltaTime || 1 / 30;

    // setup the camera
    const aspect = (this.#width || window.innerWidth) / (this.#height || window.innerHeight);
    if (!this.options.orthographic) {
      this.camera = new PerspectiveCamera(fov, aspect, near, far);
    } else {
      this.camera = new OrthographicCamera(
        -(frustumSize * aspect) / 2,
        (frustumSize * aspect) / 2,
        frustumSize / 2,
        -frustumSize / 2,
        near,
        far,
      );
      (this.camera as OrthographicCamera).frustumSize = frustumSize;
    }
    this.camera.position.copy(
      this.options.cameraPosition || new Vector3(0, 0, 4),
    );
    this.camera.lookAt(this.options.cameraTarget || new Vector3());

    this.scene = new Scene();

    this.gl = this.renderer.getContext();

    // handle resize events
    window.addEventListener("resize", this.resize);
    window.addEventListener("orientationchange", this.resize);

    // force an initial resize event
    this.resize();

    // __________________________ADDONS__________________________

    // really basic pointer events handler, the second argument
    // contains the x and y relative to the top left corner
    // of the canvas.
    // In case of touches with multiple fingers, only the
    // first touch is registered.
    this.isDragging = false;
    this.canvas.addEventListener("pointerdown", (event) => {
      if (!event.isPrimary) return;
      this.isDragging = true;
      this.#startX = event.offsetX;
      this.#startY = event.offsetY;
      const position = { x: event.offsetX, y: event.offsetY };
      // call onPointerDown method
      this.scene.traverse((child) => {
        if (typeof (child as any).onPointerDown === "function") {
          (child as any).onPointerDown(event, position);
        }
      });
      // call the pointerdown listeners
      this.#pointerdownListeners.forEach((fn) =>
        fn(event, position),
      );
    });
    this.canvas.addEventListener("pointermove", (event) => {
      if (!event.isPrimary) return;
      // call onPointerMove method
      const position = {
        x: event.offsetX,
        y: event.offsetY,
        ...(this.#startX !== undefined && {
          dragX: event.offsetX - this.#startX,
        }),
        ...(this.#startY !== undefined && {
          dragY: event.offsetY - this.#startY,
        }),
      };
      this.scene.traverse((child) => {
        if (typeof (child as any).onPointerMove === "function") {
          (child as any).onPointerMove(event, position);
        }
      });
      // call the pointermove listeners
      this.#pointermoveListeners.forEach((fn) => fn(event, position));
    });
    this.canvas.addEventListener("pointerup", (event) => {
      if (!event.isPrimary) return;
      this.isDragging = false;
      // call onPointerUp method
      const position = {
        x: event.offsetX,
        y: event.offsetY,
        ...(this.#startX !== undefined && {
          dragX: event.offsetX - this.#startX,
        }),
        ...(this.#startY !== undefined && {
          dragY: event.offsetY - this.#startY,
        }),
      };
      this.scene.traverse((child) => {
        if (typeof (child as any).onPointerUp === "function") {
          (child as any).onPointerUp(event, position);
        }
      });
      // call the pointerup listeners
      this.#pointerupListeners.forEach((fn) => fn(event, position));

      this.#startX = undefined;
      this.#startY = undefined;
    });

    // expose a composer for postprocessing passes
    if (this.options.postprocessing) {
      const maxMultisampling = this.gl.getParameter(this.gl.MAX_SAMPLES);
      this.composer = new EffectComposer(this.renderer, {
        multisampling: Math.min(8, maxMultisampling),
        frameBufferType: HalfFloatType,
        ...this.options,
      });
      this.composer.addPass(new RenderPass(this.scene, this.camera));
    }
  }

  async init() {
    // set up OrbitControls
    if (this.options.orbitControls) {
      this.orbitControls = new OrbitControls(this.camera, this.canvas);

      if (typeof this.options.orbitControls === "object") {
        Object.assign(this.orbitControls, this.options.orbitControls);
      }
    }

    // Attach the Cannon physics engine
    if (this.options.world) {
      this.world = this.options.world;
      if (this.options.showWorldWireframes) {
        this.cannonDebugger = new CannonDebugger(this.scene, this.world.bodies);
      }
    }

    // show the fps meter
    if (this.options.showFps) {
      this.stats = new Stats();
      this.stats.showPanel(0);
      document.body.appendChild(this.stats.dom);
    }

    // initialize the gui
    if (this.options.gui) {
      this.gui = new GUI();

      if (this.options.guiClosed) {
        this.gui.close();
      }

      Object.assign(Object.getPrototypeOf(this.gui), {
        // let's try to be smart
        addSmart(object: object, key: string, name = "") {
          const value = object[key as keyof typeof object];
          switch (typeof value) {
            case "number": {
              if (value === 0) {
                return this.add(object, key, -10, 10, 0.01);
              } else if (
                0 < value &&
                value < 1 &&
                !["f", "a", "frequency", "amplitude"].includes(name)
              ) {
                return this.add(object, key, 0, 1, 0.01);
              } else if (value > 0) {
                return new ExponentialNumberController(
                  this,
                  object,
                  key,
                  0.01,
                  value < 100 ? 100 : 1000,
                  0.01,
                );
              } else {
                return this.add(object, key, -10, 0, 0.01);
              }
            }
            case "object": {
              return this.addColor(object, key);
            }
            default: {
              return this.add(object, key);
            }
          }
        },
        // specifically for three.js exposed uniforms
        wireUniforms(folderName: string, uniforms: object, { blacklist = [] }: { blacklist?: string[] } = {}) {
          const folder = this.addFolder(folderName);

          Object.keys(uniforms).forEach((key) => {
            if (blacklist.includes(key)) return;
            const uniformObject = uniforms[key as keyof typeof uniforms];
            folder.addSmart(uniformObject, "value", key).name(key);
          });
        },
      });

      if (typeof this.options.gui === "object") {
        this.guiState = this.options.gui;
        Object.keys(this.options.gui).forEach((key) => {
          this.gui?.addSmart(this.guiState!, key);
        });
      }
    }

    // detect the gpu info
    this.loadGPUTier = getGPUTier({ glContext: this.gl }).then((gpuTier) => {
      this.gpu = {
        ...gpuTier
      };
    });

    // initialize the mp4 recorder
    if (isWebCodecsSupported()) {
      loadMP4Module().then((mp4) => {
        this.#mp4 = mp4;
      });
    }
  }

  get width(): number {
    return this.#width || window.innerWidth;
  }

  get height(): number {
    return this.#height || window.innerHeight;
  }

  get pixelRatio(): number {
    return Math.min(this.maxPixelRatio, window.devicePixelRatio);
  }

  resize = ({
    width = this.width,
    height = this.height,
    pixelRatio = this.pixelRatio,
  }: { width?: number; height?: number; pixelRatio?: number } = {}) => {
    // update pixel ratio if necessary
    if (this.renderer.getPixelRatio() !== pixelRatio) {
      this.renderer.setPixelRatio(pixelRatio);
    }

    // setup new size & update camera aspect if necessary
    this.renderer.setSize(width, height);
    if (this.camera.isPerspectiveCamera) {
      this.camera.aspect = width / height;
    } else {
      const aspect = width / height;
      const camera = this.camera as OrthographicCamera;
      camera.left = -(camera.frustumSize * aspect) / 2;
      camera.right = (camera.frustumSize * aspect) / 2;
      camera.top = camera.frustumSize / 2;
      camera.bottom = -camera.frustumSize / 2;
    }
    this.camera.updateProjectionMatrix();

    // resize also the composer, width and height
    // are automatically extracted from the renderer
    if (this.composer) {
      this.composer.setSize();
    }

    // recursively tell all child objects to resize
    this.scene.traverse((obj) => {
      if (typeof (obj as any).resize === "function") {
        (obj as any).resize({
          width,
          height,
          pixelRatio,
        });
      }
    });

    // draw a frame to ensure the new size has been registered visually
    this.draw();
    return this;
  };

  // convenience function to trigger a PNG download of the canvas
  saveScreenshot = async ({
    width = this.width,
    height = this.height,
    fileName = "Screenshot",
  }: { width?: number; height?: number; fileName?: string } = {}) => {
    // force a specific output size
    this.resize({ width, height, pixelRatio: 1 });

    const blob = await new Promise<Blob | null>((resolve) =>
      this.canvas.toBlob(resolve, "image/png"),
    );

    // reset to default size
    this.resize();

    // save
    if(blob) {
      downloadFile(`${fileName}.png`, blob);
    }
  };

  // start recording of a gif or a video
  startRecording = ({
    width = this.width,
    height = this.height,
    fileName = "Recording",
    ...options
  }: { width?: number; height?: number; fileName?: string, [key: string]: any } = {}) => {
    if (!isWebCodecsSupported()) {
      throw new Error("You need the WebCodecs API to use mp4-wasm");
    }

    if (this.isRecording) {
      return;
    }

    this.#fileName = fileName;

    // force a specific output size
    this.resize({ width, height, pixelRatio: 1 });
    this.draw();

    const fps = 60;
    this.#mp4Encoder = this.#mp4!.createWebCodecsEncoder({
      width: roundEven(width),
      height: roundEven(height),
      fps,
      bitrate: 120 * 1000 * 1000, // 120 Mbit/s
      encoderOptions: {
        // https://github.com/mattdesl/mp4-wasm/blob/d266bc08edef719158a5163a9b483bd065476c73/src/extern-post.js#L111
        framerate: Math.min(30, fps),
      },
      ...options,
    });
  };

  stopRecording = async () => {
    if (!this.isRecording) {
      return;
    }

    for (let frame of this.#frames) {
      await this.#mp4Encoder!.addFrame(frame);
    }
    const buffer = await this.#mp4Encoder!.end();
    const blob = new Blob([buffer]);

    this.#mp4Encoder = undefined;
    // dispose the graphical resources associated with the ImageBitmap
    this.#frames.forEach((frame) => frame.close());
    this.#frames.length = 0;

    // reset to default size
    this.resize();
    this.draw();

    downloadFile(`${this.#fileName}.mp4`, blob);
  };

  update = (dt: number, time: number, xrframe?: any) => {
    if (this.orbitControls) {
      this.orbitControls.update();
    }

    // recursively tell all child objects to update
    this.scene.traverse((obj) => {
      if (typeof (obj as any).update === "function" && !(obj as any).isTransformControls) {
        (obj as any).update(dt, time, xrframe);
      }
    });

    if (this.world) {
      // update the cannon-es physics engine
      this.world.step(1 / 60, dt);

      // update the debug wireframe renderer
      if (this.cannonDebugger) {
        this.cannonDebugger.update();
      }

      // recursively tell all child bodies to update
      this.world.bodies.forEach((body) => {
        if (typeof (body as any).update === "function") {
          (body as any).update(dt, time);
        }
      });
    }

    // call the update listeners
    this.#updateListeners.forEach((fn) => fn(dt, time, xrframe));

    return this;
  };

  onUpdate(fn: UpdateListener) {
    this.#updateListeners.push(fn);
  }

  onPointerDown(fn: PointerListener) {
    this.#pointerdownListeners.push(fn);
  }

  onPointerMove(fn: PointerListener) {
    this.#pointermoveListeners.push(fn);
  }

  onPointerUp(fn: PointerListener) {
    this.#pointerupListeners.push(fn);
  }

  offUpdate(fn: UpdateListener) {
    const index = this.#updateListeners.indexOf(fn);

    // return silently if the function can't be found
    if (index === -1) {
      return;
    }

    this.#updateListeners.splice(index, 1);
  }

  offPointerDown(fn: PointerListener) {
    const index = this.#pointerdownListeners.indexOf(fn);

    // return silently if the function can't be found
    if (index === -1) {
      return;
    }

    this.#pointerdownListeners.splice(index, 1);
  }

  offPointerMove(fn: PointerListener) {
    const index = this.#pointermoveListeners.indexOf(fn);

    // return silently if the function can't be found
    if (index === -1) {
      return;
    }

    this.#pointermoveListeners.splice(index, 1);
  }

  offPointerUp(fn: PointerListener) {
    const index = this.#pointerupListeners.indexOf(fn);

    // return silently if the function can't be found
    if (index === -1) {
      return;
    }

    this.#pointerupListeners.splice(index, 1);
  }

  draw = () => {
    // postprocessing doesn't currently work in WebXR
    const isXR = this.renderer.xr.enabled && this.renderer.xr.isPresenting;

    if (this.composer && !isXR) {
      this.composer.render(this.dt);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
    return this;
  };

  start = () => {
    if (this.isRunning) return;
    this.isRunning = true;

    // draw immediately
    this.draw();

    this.renderer.setAnimationLoop(this.animate);
    return this;
  };

  stop = () => {
    if (!this.isRunning) return;
    this.renderer.setAnimationLoop(null);
    this.isRunning = false;
    return this;
  };

  animate = (now: number, xrframe?: any) => {
    if (!this.isRunning) return;

    if (this.stats) this.stats.begin();

    this.dt = Math.min(this.maxDeltaTime, (now - this.#lastTime) / 1000);
    this.time += this.dt;
    this.#lastTime = now;
    this.update(this.dt, this.time, xrframe);
    this.draw();

    // save the bitmap of the canvas for the recorder
    if (this.isRecording) {
      const index = this.#frames.length;
      createImageBitmap(this.canvas).then((bitmap) => {
        this.#frames[index] = bitmap;
      });
    }

    if (this.stats) this.stats.end();
  };

  get cursor(): string {
    return this.canvas.style.cursor;
  }

  set cursor(cursor: string) {
    if (cursor) {
      this.canvas.style.cursor = cursor;
    } else {
      this.canvas.style.cursor = 'auto';
    }
  }
}

function downloadFile(name: string, blob: Blob) {
  const link = document.createElement("a");
  link.download = name;
  link.href = URL.createObjectURL(blob);
  link.click();

  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    link.removeAttribute("href");
  }, 0);
}

// Rounds to the closest even number
function roundEven(n: number): number {
  return Math.round(n / 2) * 2;
}
