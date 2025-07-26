import {
  CubeTexture,
  CubeTextureLoader,
  EquirectangularReflectionMapping,
  PMREMGenerator,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  UnsignedByteType,
  WebGLRenderer,
} from "three";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { EXRLoader } from "three/addons/loaders/EXRLoader.js";
import { HDRCubeTextureLoader } from "three/addons/loaders/HDRCubeTextureLoader.js";

interface LoadEnvMapOptions {
  renderer: WebGLRenderer;
  pmrem?: boolean;
  gamma?: boolean;
  [key: string]: any;
}

export default function loadEnvMap(url: string | string[], { renderer, ...options }: LoadEnvMapOptions): Promise<Texture> {
  if (!renderer) {
    throw new Error(`Env map requires renderer to passed in the options for ${url}!`);
  }

  const isEquirectangular = !Array.isArray(url);

  let loader: Promise<Texture>;
  if (isEquirectangular) {
    const singleUrl = url as string;
    const extension = singleUrl.slice(singleUrl.lastIndexOf(".") + 1);

    switch (extension) {
      case "hdr":
        loader = new RGBELoader().setDataType(UnsignedByteType).loadAsync(singleUrl);
        break;
      case "exr":
        loader = new EXRLoader().setDataType(UnsignedByteType).loadAsync(singleUrl);
        break;
      case "png":
      case "jpg":
        loader = new TextureLoader().loadAsync(singleUrl).then((texture) => {
          if (renderer.outputColorSpace === SRGBColorSpace && options.gamma) {
            texture.colorSpace = SRGBColorSpace;
          }
          return texture;
        });
        break;
      default:
        throw new Error(`Extension ${extension} not supported`);
    }

    loader = loader.then((texture) => {
      if (options.pmrem) {
        return equirectangularToPMREMCube(texture, renderer);
      } else {
        return equirectangularToCube(texture);
      }
    });
  } else {
    const multiUrl = url as string[];
    const extension = multiUrl[0].slice(multiUrl[0].lastIndexOf(".") + 1);

    switch (extension) {
      case "hdr":
        loader = new HDRCubeTextureLoader().setDataType(UnsignedByteType).loadAsync(multiUrl);
        break;
      case "png":
      case "jpg":
        loader = new CubeTextureLoader().loadAsync(multiUrl).then((texture) => {
          if (renderer.outputColorSpace === SRGBColorSpace && options.gamma) {
            texture.colorSpace = SRGBColorSpace;
          }
          return texture;
        });
        break;
      default:
        throw new Error(`Extension ${extension} not supported`);
    }

    loader = loader.then((texture) => {
      if (options.pmrem) {
        return cubeToPMREMCube(texture as CubeTexture, renderer);
      } else {
        return texture;
      }
    });
  }

  const textureOptions = Object.keys(options).filter(
    (option) => !["pmrem", "linear"].includes(option),
  );
  textureOptions.forEach((option) => {
    loader = loader.then((texture) => {
      (texture as any)[option] = options[option];
      return texture;
    });
  });

  return loader;
}

function equirectangularToPMREMCube(texture: Texture, renderer: WebGLRenderer): Texture {
  const pmremGenerator = new PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  const cubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
  pmremGenerator.dispose();
  texture.dispose();
  return cubeRenderTarget.texture;
}

function cubeToPMREMCube(texture: CubeTexture, renderer: WebGLRenderer): Texture {
  const pmremGenerator = new PMREMGenerator(renderer);
  pmremGenerator.compileCubemapShader();
  const cubeRenderTarget = pmremGenerator.fromCubemap(texture);
  pmremGenerator.dispose();
  texture.dispose();
  return cubeRenderTarget.texture;
}

function equirectangularToCube(texture: Texture): Texture {
  texture.mapping = EquirectangularReflectionMapping;
  return texture;
}
