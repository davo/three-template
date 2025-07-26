import { describe, it, expect } from "vitest";
import { monkeyPatch } from "./customizeShader";

describe("customizeShader", () => {
  it("should monkey patch a shader", () => {
    const shader = "void main() {}";
    const patchedShader = monkeyPatch(shader, {
      head: "precision highp float;",
      main: "gl_FragColor = vec4(1.0);",
    });
    expect(patchedShader).toContain("precision highp float;");
    expect(patchedShader).toContain("gl_FragColor = vec4(1.0);");
  });
});
