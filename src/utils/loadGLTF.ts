import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

interface LoadGLTFOptions {
  draco?: boolean;
}

export default function loadGLTF(url: string, options: LoadGLTFOptions = {}): Promise<GLTF> {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    if (options.draco) {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }

    loader.load(url, resolve, undefined, (err) =>
      reject(new Error(`Could not load GLTF asset ${url}:\n${err}`)),
    );
  });
}
