import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import confPrettier from 'eslint-plugin-prettier/recommended'
// import type { Linter } from 'eslint'
import confIgnores from './config/ignores.js'
import confJs from './config/javascript.js'
import confTs from './config/typescript.js'
import confVue from './config/vue.js'
import confImports from './config/imports.js'
import confPromises from './config/promises.js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: '@charlesbt/eslint-config-custom',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...confIgnores,
  js.configs.recommended,
  ...ts.configs.recommended,
  ...confJs,
  ...confTs,
  // ...confVue,
  ...confImports,
  ...confPromises,

  // Prettier configuration (MUST BE LAST)
  confPrettier,
] // satisfies Linter.Config[]
