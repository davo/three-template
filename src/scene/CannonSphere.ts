import { Group, Mesh, MeshStandardMaterial, SphereGeometry } from "three";
import { Body, Sphere, IBodyOptions } from "cannon-es";
import WebGLApp from "../utils/WebGLApp";

interface CannonSphereOptions extends IBodyOptions {
  radius?: number;
}

export default class CannonSphere extends Body {
  mesh = new Group();
  private webgl: WebGLApp;
  private options: CannonSphereOptions;

  constructor(webgl: WebGLApp, options: CannonSphereOptions = {}) {
    super(options);
    this.webgl = webgl;
    this.options = options;

    const { radius = 1 } = this.options;

    this.addShape(new Sphere(radius));

    this.mesh.add(
      new Mesh(
        new SphereGeometry(radius, 32, 32),
        new MeshStandardMaterial({ color: Math.random() * 0xffffff }),
      ),
    );

    this.update();
  }

  update(dt?: number, time?: number) {
    this.mesh.position.copy(this.position);
    this.mesh.quaternion.copy(this.quaternion);
  }
}
