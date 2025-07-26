import { BoxGeometry, Group, Mesh, MeshBasicMaterial, Color } from "three";
import WebGLApp from "../utils/WebGLApp";

interface BoxOptions {
  color?: Color | string | number;
}

export default class Box extends Group {
  private webgl: WebGLApp;
  private options: BoxOptions;
  private box: Mesh;

  constructor(webgl: WebGLApp, options: BoxOptions = {}) {
    super();
    this.webgl = webgl;
    this.options = options;

    const { color = 0x00ff00 } = this.options;

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color, wireframe: true });
    this.box = new Mesh(geometry, material);

    this.add(this.box);
  }

  update(dt: number, time: number) {
    this.box.rotation.y += dt * 0.5;
  }
}
