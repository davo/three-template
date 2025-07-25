import { Group, Mesh, MeshStandardMaterial, SphereGeometry } from 'three'
import { Body, Sphere } from 'cannon-es'

// remember to add the body to the CANNON world and
// the mesh to the three.js scene or to some component
//
//   const sphere = new CannonSphere(webgl, { mass: 1, radius: 1 })
//   webgl.world.addBody(sphere)
//   webgl.scene.add(sphere.mesh)

export default class CannonSphere extends Body {
  mesh = new Group()

  constructor(webgl, options = {}) {
    super(options)
    this.webgl = webgl
    this.options = options

    const { radius = 1 } = this.options

    this.addShape(new Sphere(radius))

    // add corresponding geometry and material
    this.mesh.add(
      new Mesh(
        new SphereGeometry(radius, 32, 32),
        new MeshStandardMaterial({ color: Math.random() * 0xffffff })
      )
    )

    // sync the position the first time
    this.update()
  }

  update() {
    // sync the mesh to the physical body
    this.mesh.position.copy(this.position)
    this.mesh.quaternion.copy(this.quaternion)
  }
}
