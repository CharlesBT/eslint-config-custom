/* Dependencies to install:
base:
  @rushstack/eslint-patch
  prettier
  eslint
parsers:
  @typescript-eslint/parser
  vue-eslint-parser
rules:
  eslint-config-prettier
  eslint-plugin-prettier
  @typescript-eslint/eslint-plugin
  eslint-import-resolver-typescript
  eslint-plugin-import
  eslint-plugin-promise
  eslint-plugin-vue
  eslint-plugin-header
  eslint-plugin-eslint-comments
  eslint-plugin-cypress
  @vue/eslint-config-typescript
optional :
  eslint-plugin-tsdoc

install:
pnpm i -D @rushstack/eslint-patch prettier eslint @typescript-eslint/parser vue-eslint-parser eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-promise eslint-plugin-vue eslint-plugin-header eslint-plugin-eslint-comments eslint-plugin-cypress @vue/eslint-config-typescript eslint-plugin-tsdoc


See @antfu custom eslint config for more rules settings for vue/nuxt/typescript development, https://github.com/antfu/eslint-config
*/

require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    es2021: true,
    es2022: true,
    'cypress/globals': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },

  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],

  plugins: [
    '@typescript-eslint',
    'header',
    'import',
    'promise',
    'cypress',
    // 'eslint-plugin-tsdoc',
    'prettier',
  ],

  settings: {
    /* eslint-import-resolver-typescript */
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.mts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts'],
      },
      typescript: {},
    },
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'plugin:eslint-comments/recommended',
    './eslint-nuxt3-rules.cjs',
    // "./.eslintrc.my_project_custom_eslint_config.cjs", // add your custom eslint config here
    'plugin:prettier/recommended', // must be the last one, see: https://prettier.io/docs/en/integrating-with-linters.html
  ],

  overrides: [
    {
      files: ['*.js', '*.jsx', '*.mjs', '*.cjs', '*.ts', '*.tsx', '*.mts', '*.cts', '*.vue'],
      rules: {
        /* eslint */
        camelcase: 'off',
        'no-unused-vars': 'off',
        'no-var': 'warn',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        eqeqeq: ['error', 'smart'],
        'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
        'array-callback-return': [
          'error',
          {
            allowImplicit: false,
            checkForEach: false,
          },
        ],
        'no-undef': 'off',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'require-await': 'off',
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
        'no-lone-blocks': 'error',
        'prefer-promise-reject-errors': 'error',
        'no-await-in-loop': 'warn', // point for optimization with Promise.all https://eslint.org/docs/rules/no-await-in-loop

        /* @typescript-eslint/eslint-plugin */
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false, variables: true },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        /* eslint-plugin-import */
        'import/order': 'error',
        'import/first': 'error',
        'import/no-unresolved': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',

        /* eslint-plugin-vue */
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',

        /* eslint-plugin-promise */

        /* eslint-plugin-eslint-comments */

        /* eslint-plugin-tsdoc */
        // 'tsdoc/syntax': 'warn',

        /* eslint-plugin-header */
        'header/header': [
          2,
          'block',
          [
            ' Copyright (c) BMS Corp. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. ',
          ],
        ],
      },
    },
    /* Vue specfic rules */
    {
      files: '*.vue',
      rules: {
        'header/header': 'off',
      },
    },
    /* Cypress specfic rules */
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],

  rules: {
    'prettier/prettier': 'error',
  },
}
