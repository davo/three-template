import { Group, MeshStandardMaterial, Raycaster, Vector2, Material } from "three";
import assets from "../utils/AssetManager";
import { addUniforms, customizeVertexShader } from "../utils/customizeShader";
import WebGLApp from "../utils/WebGLApp";

const suzanneKey = assets.queue({
  url: "assets/suzanne.gltf",
  type: "gltf",
});

const albedoKey = assets.queue({
  url: "assets/spotty-metal/albedo.jpg",
  type: "texture",
  gamma: true,
});

const metalnessKey = assets.queue({
  url: "assets/spotty-metal/metalness.jpg",
  type: "texture",
});

const roughnessKey = assets.queue({
  url: "assets/spotty-metal/roughness.jpg",
  type: "texture",
});

const normalKey = assets.queue({
  url: "assets/spotty-metal/normal.jpg",
  type: "texture",
});

const hdrKey = assets.queue({
  url: "assets/ouside-afternoon-blurred-hdr.jpg",
  type: "env-map",
  gamma: true,
});

interface SuzanneOptions {}

interface Uniforms {
  time: { value: number };
  frequency: { value: number };
  amplitude: { value: number };
  [key: string]: { value: any };
}

interface CustomMaterial extends MeshStandardMaterial {
  uniforms: Uniforms;
}

export default class Suzanne extends Group {
  private webgl: WebGLApp;
  private options: SuzanneOptions;
  private material: CustomMaterial;
  private speed: number;

  constructor(webgl: WebGLApp, options: SuzanneOptions = {}) {
    super();
    this.webgl = webgl;
    this.options = options;

    const suzanneGltf = assets.get(suzanneKey);
    const suzanne = suzanneGltf.scene.clone();

    const envMap = assets.get(hdrKey);
    const material = new MeshStandardMaterial({
      map: assets.get(albedoKey),
      metalnessMap: assets.get(metalnessKey),
      roughnessMap: assets.get(roughnessKey),
      normalMap: assets.get(normalKey),
      normalScale: new Vector2(2, 2),
      envMap,
      roughness: 0.5,
      metalness: 1,
    }) as CustomMaterial;
    this.webgl.gui?.add(material, "roughness");
    this.material = material;

    addUniforms(material, {
      time: { value: 0 },
      frequency: { value: 0.5 },
      amplitude: { value: 0.7 },
    });
    
    const movementFolder = this.webgl.gui?.addFolder("Movement");
    movementFolder?.add(material.uniforms.frequency, "value", 0, 1).name("frequency");
    movementFolder?.add(material.uniforms.amplitude, "value", 0, 1).name("amplitude");

    customizeVertexShader(material, {
      head: `
        uniform float time;
        uniform float frequency;
        uniform float amplitude;
      `,
      main: `
        float theta = sin(position.z * frequency + time) * amplitude;
        float c = cos(theta);
        float s = sin(theta);
        mat3 deformMatrix = mat3(c, 0, s, 0, 1, 0, -s, 0, c);
      `,
      objectNormal: `
        objectNormal *= deformMatrix;
      `,
      transformed: `
        transformed *= deformMatrix;
      `,
    });

    suzanne.traverse((child) => {
      if ((child as any).isMesh) {
        (child as any).material = material;
      }
    });

    suzanne.scale.multiplyScalar(1.2);

    this.speed = 1.5;
    movementFolder?.add(this, "speed", 0, 5);

    this.add(suzanne);

    this.webgl.scene.background = envMap;
  }

  onPointerDown(event: PointerEvent, { x, y }: { x: number, y: number }) {
    const coords = new Vector2().set(
      (x / this.webgl.width) * 2 - 1,
      (-y / this.webgl.height) * 2 + 1,
    );
    const raycaster = new Raycaster();
    raycaster.setFromCamera(coords, this.webgl.camera);
    const hits = raycaster.intersectObject(this, true);
    console.log(hits.length > 0 ? `Hit ${hits[0].object.name}!` : "No hit");
  }

  update(dt: number, time: number) {
    if (this.material.uniforms) {
      this.material.uniforms.time.value += dt * this.speed;
    }
  }
}
