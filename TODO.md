# Refactoring Roadmap

This is the high-level plan for refactoring the `threejs-modern-app`.

- [X] **Phase 0: Initial Analysis & Setup (Current State)**
    -   **Current Tech Stack:**
        -   **Build Tool:** Custom `esbuild.js` script
        -   **Package Manager:** `yarn`
        -   **Language:** JavaScript (ESM)
        -   **Core Library:** `three @ 0.158.0`
    -   **Action:** This phase is complete. You have analyzed the existing structure.

- [ ] **Phase 1: Toolchain Migration (Vite + PNPM)**
    -   **Goal:** Replace the custom `esbuild.js` and `yarn` with a modern, standardized toolchain.
    -   **Tasks:**
        1.  Initialize `pnpm` and remove `yarn.lock`.
        2.  Install all existing dependencies using `pnpm`.
        3.  Remove `esbuild.js`, `browser-sync`, `cross-env`, `ora`, `chalk`, and other build-script-related dev dependencies.
        4.  Add `vite` as a new dev dependency.
        5.  Create a `vite.config.js` to replicate the existing functionality: serve `public/` directory, and use `src/index.js` as the entry point.
        6.  Update `package.json` scripts to use Vite (`dev`, `build`, `preview`).
        7.  Verify that the application runs correctly using `pnpm dev` and builds successfully with `pnpm build`.

- [ ] **Phase 2: Code Quality & Linting Setup (ESLint to Biome Migration)**
    -   **Goal:** Migrate from ESLint and Prettier to Biome for unified formatting and linting with better performance.
    -   **Tasks:**
        1.  Install Biome as a development dependency: `pnpm add -D --save-exact @biomejs/biome`.
        2.  Run the ESLint migration command: `npx @biomejs/biome migrate eslint --write` to automatically convert existing ESLint configuration to Biome format.
        3.  Run the Prettier migration command: `npx @biomejs/biome migrate prettier --write` to convert Prettier configuration to Biome format.
        4.  Remove old linting/formatting dependencies and configuration files: `.eslintrc.cjs`, `.prettierrc`, `.prettierignore`, and uninstall any ESLint/Prettier related packages.
        5.  Update `package.json` scripts to use Biome commands (`lint`, `format`, `check`).
        6.  Set up `husky` and `lint-staged` to use Biome for pre-commit hooks.
        7.  Run `pnpm format` and `pnpm lint --fix` using Biome on the entire codebase and commit the changes.
        8.  Verify that Biome's VCS integration is enabled for proper ignore file handling.

- [ ] **Phase 3: TypeScript Migration**
    -   **Goal:** Convert the entire `src/` directory from JavaScript to TypeScript for improved type safety and developer experience.
    -   **Tasks:**
        1.  Add `typescript` and relevant Three.js types (`@types/three`) as dev dependencies.
        2.  Create a `tsconfig.json` file with strict settings.
        3.  Rename all `.js` files in `src/` to `.ts`.
        4.  Update `vite.config.js` and `index.html` to use the new `.ts` entry point (`src/index.ts`).
        5.  Systematically fix all resulting type errors file by file, adding explicit types for function parameters, return values, and class properties. Pay special attention to `WebGLApp.js` and the asset loaders.
        6.  Ensure the application runs and builds without TypeScript errors (`pnpm build`).

- [ ] **Phase 4: Testing Framework Integration (Vitest)**
    -   **Goal:** Introduce a modern testing framework to ensure the boilerplate's core functionality is stable and to enable TDD for future features.
    -   **Tasks:**
        1.  Add `vitest` and `jsdom` as dev dependencies.
        2.  Configure `vite.config.js` for testing with Vitest.
        3.  Create an initial test file (e.g., `src/utils/WebGLApp.test.ts`).
        4.  Write basic unit tests for a critical, pure utility function (e.g., a function from `customizeShader.js`) to prove the test runner is working.
        5.  Add a `test` script to `package.json`.

- [ ] **Phase 5: Dependency Upgrade & Final Polish**
    -   **Goal:** Bring all dependencies to their latest stable versions and clean up documentation.
    -   **Tasks:**
        1.  Use `pnpm outdated` to identify outdated packages.
        2.  Upgrade `three`, `postprocessing`, `cannon-es`, and other key dependencies one by one, verifying the application still works after each upgrade.
        3.  Update the `README.md` to reflect the new toolchain, commands, and architecture.
        4.  Remove any obsolete files from the old build system.
