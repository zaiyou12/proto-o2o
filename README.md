# Proto-o2o-platform

This codebase was create to demonstrate a fully fledged fullstack 020 application built with **Vue3** including CRUD operations, authentication, routing, pagination, and more.

## What works?

- Vue
  - [Composition API](https://composition-api.vuejs.org/)
  - [Suspense](https://v3.vuejs.org/guide/component-dynamic-async.html#using-with-suspense) (Experimental)
  - [Vue router](https://next.router.vuejs.org/)
  - [Script setup sugar](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md)
  - [Script ref sugar](https://github.com/vuejs/rfcs/blob/ref-sugar/active-rfcs/0000-ref-sugar.md)
  - Unit test ([Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro))
  - [Vue tsc](https://github.com/johnsoncodehk/vue-tsc)
- Others
  - [TypeScript](https://www.typescriptlang.org/)
  - [ESLint](https://eslint.vuejs.org/)
  - [Vite](https://github.com/vitejs/vite)
  - E2E test ([Cypress](https://docs.cypress.io))

## Recommended local Setup

- node: version 13 or higer (or 14.17.3 LTS)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) + [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
