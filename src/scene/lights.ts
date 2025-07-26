import { DirectionalLight, HemisphereLight } from "three";
import WebGLApp from "../utils/WebGLApp";

export function addNaturalLight(webgl: WebGLApp) {
  const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 50, 0);
  webgl.scene.add(hemiLight);

  const dirLight = new DirectionalLight(0xffffff, 1);
  dirLight.color.setHSL(0.1, 1, 0.95);
  dirLight.position.set(3, 5, 1);
  dirLight.position.multiplyScalar(50);
  webgl.scene.add(dirLight);
}
