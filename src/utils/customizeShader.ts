import { Material, Shader } from "three";

interface CustomMaterial extends Material {
  beforeCompileListeners?: ((shader: Shader) => void)[];
  addBeforeCompileListener?: (fn: (shader: Shader) => void) => void;
  uniforms?: { [uniform: string]: { value: any } };
  defines?: { [define: string]: any };
}

interface ShaderHooks {
  defines?: { [key: string]: any };
  head?: string;
  main?: string;
  transformed?: string;
  objectNormal?: string;
  transformedNormal?: string;
  gl_Position?: string;
  diffuse?: string;
  emissive?: string;
  gl_FragColor?: string;
  [key: string]: any;
}

export function addDefines(material: CustomMaterial, defines: { [key: string]: any }) {
  prepareOnBeforeCompile(material);

  material.defines = defines;

  material.addBeforeCompileListener?.((shader) => {
    material.defines = {
      ...material.defines,
      ...shader.defines,
    };
    shader.defines = material.defines;
  });

  constructOnBeforeCompile(material);
}

export function addUniforms(material: CustomMaterial, uniforms: { [key: string]: { value: any } }) {
  prepareOnBeforeCompile(material);

  material.uniforms = uniforms;

  material.addBeforeCompileListener?.((shader) => {
    material.uniforms = {
      ...material.uniforms,
      ...shader.uniforms,
    };
    shader.uniforms = material.uniforms;
  });

  constructOnBeforeCompile(material);
}

export function customizeVertexShader(material: CustomMaterial, hooks: ShaderHooks) {
  prepareOnBeforeCompile(material);

  material.addBeforeCompileListener?.((shader) => {
    shader.vertexShader = monkeyPatch(shader.vertexShader, hooks);
  });

  constructOnBeforeCompile(material);
}

export function customizeFragmentShader(material: CustomMaterial, hooks: ShaderHooks) {
  prepareOnBeforeCompile(material);

  material.addBeforeCompileListener?.((shader) => {
    shader.fragmentShader = monkeyPatch(shader.fragmentShader, hooks);
  });

  constructOnBeforeCompile(material);
}

function prepareOnBeforeCompile(material: CustomMaterial) {
  if (material.beforeCompileListeners) {
    return;
  }

  material.beforeCompileListeners = [];
  material.addBeforeCompileListener = (fn: (shader: Shader) => void) => {
    material.beforeCompileListeners?.push(fn);
  };
}

function constructOnBeforeCompile(material: CustomMaterial) {
  material.onBeforeCompile = (shader) => {
    material.beforeCompileListeners?.forEach((fn) => fn(shader));
  };
}

export function monkeyPatch(
  shader: string,
  {
    defines = {},
    head = "",
    main = "",
    transformed,
    objectNormal,
    transformedNormal,
    gl_Position,
    diffuse,
    emissive,
    gl_FragColor,
    ...replaces
  }: ShaderHooks,
): string {
  let patchedShader = shader;

  const replaceAll = (str: string, find: string, rep: string) => str.split(find).join(rep);
  Object.keys(replaces).forEach((key) => {
    patchedShader = replaceAll(patchedShader, key, replaces[key]);
  });

  patchedShader = patchedShader.replace(
    "void main() {",
    `
    ${head}
    void main() {
      ${main}
    `,
  );

  if (transformed && patchedShader.includes("#include <begin_vertex>")) {
    patchedShader = patchedShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
      ${transformed}
      `,
    );
  }

  if (objectNormal && patchedShader.includes("#include <beginnormal_vertex>")) {
    patchedShader = patchedShader.replace(
      "#include <beginnormal_vertex>",
      `#include <beginnormal_vertex>
      ${objectNormal}
      `,
    );
  }

  if (
    transformedNormal &&
    patchedShader.includes("#include <defaultnormal_vertex>")
  ) {
    patchedShader = patchedShader.replace(
      "#include <defaultnormal_vertex>",
      `#include <defaultnormal_vertex>
      ${transformedNormal}
      `,
    );
  }

  if (gl_Position && patchedShader.includes("#include <project_vertex>")) {
    patchedShader = patchedShader.replace(
      "#include <project_vertex>",
      `#include <project_vertex>
      ${gl_Position}
      `,
    );
  }

  if (
    diffuse &&
    patchedShader.includes("vec4 diffuseColor = vec4( diffuse, opacity );")
  ) {
    patchedShader = patchedShader.replace(
      "vec4 diffuseColor = vec4( diffuse, opacity );",
      `
      vec3 diffuse_;
      ${replaceAll(diffuse, "diffuse =", "diffuse_ =")}
      vec4 diffuseColor = vec4(diffuse_, opacity);
      `,
    );
  }

  if (
    emissive &&
    patchedShader.includes("vec3 totalEmissiveRadiance = emissive;")
  ) {
    patchedShader = patchedShader.replace(
      "vec3 totalEmissiveRadiance = emissive;",
      `
      vec3 emissive_;
      ${replaceAll(emissive, "emissive =", "emissive_ =")}
      vec3 totalEmissiveRadiance = emissive_;
      `,
    );
  }

  if (gl_FragColor && patchedShader.includes("#include <output_fragment>")) {
    patchedShader = patchedShader.replace(
      "#include <output_fragment>",
      `
      #include <output_fragment>
      ${gl_FragColor}
      `,
    );
  }

  const stringDefines = Object.keys(defines)
    .map((d) => `#define ${d} ${defines[d]}`)
    .join("\n");

  return `
    ${stringDefines}
    ${patchedShader}
  `;
}
