import { SRGBColorSpace, Texture, TextureLoader, WebGLRenderer } from "three";

interface LoadTextureOptions {
  renderer: WebGLRenderer;
  gamma?: boolean;
  [key: string]: any;
}

export default function loadTexture(url: string, { renderer, ...options }: LoadTextureOptions): Promise<Texture> {
  if (!renderer) {
    throw new Error(
      `Texture requires renderer to passed in the options for ${url}!`,
    );
  }

  return new Promise((resolve, reject) => {
    new TextureLoader().load(
      url,
      (texture) => {
        if (renderer.outputColorSpace === SRGBColorSpace && options.gamma) {
          texture.colorSpace = SRGBColorSpace;
        }

        const textureOptions = Object.keys(options).filter(
          (option) => !["linear"].includes(option),
        );
        textureOptions.forEach((option) => {
          (texture as any)[option] = options[option];
        });

        renderer.initTexture(texture);

        resolve(texture);
      },
      undefined,
      (err) => reject(new Error(`Could not load texture ${url}:\n${err}`)),
    );
  });
}
