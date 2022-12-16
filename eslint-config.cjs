/* Copyright (c) BMS Corp. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    es2022: true,
    // 'cypress/globals': true,
  },

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // must be the last one, see: https://prettier.io/docs/en/integrating-with-linters.html
  ],

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
    'eslint-comments',
    // 'eslint-plugin-tsdoc',
    // 'cypress',
    'prettier',
  ],

  /*
    "off" or 0 - turn the rule off
    "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
    "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
  */
  overrides: [
    // base ruless
    {
      files: ['*.js', '*.jsx', '*.mjs', '*.cjs', '*.ts', '*.tsx', '*.mts', '*.cts', '*.vue'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions.
        'no-empty': ['error', { allowEmptyCatch: true }],
        // "no-undef": "off",
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        // '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/explicit-module-boundary-types': 'error',
        'import/no-unresolved': 'error',
        // "import/default": "off",
        // 'import/no-named-as-default': 'off',
        // 'import/no-named-as-default-member': 'off',
        'promise/catch-or-return': 'warn',
        'promise/always-return': 'warn',
        'require-await': 'warn',
        // "no-await-in-loop": "warn", // point for optimization with Promise.all https://eslint.org/docs/rules/no-await-in-loop

        // enable TSDoc
        // 'tsdoc/syntax': 'warn',
        'header/header': [
          2,
          'block',
          [
            ' Copyright (c) BMS Corp. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. ',
          ],
        ],
      },
    },
    // enable the rule specifically for Vue files
    {
      files: '*.vue',
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: ['plugin:vue/vue3-essential'],
      rules: {
        'header/header': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
      },
    },

    // enable the rule specifically for Cypress files
    // {
    //   files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
    //   extends: ['plugin:cypress/recommended'],
    // },
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.mts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts'],
        moduleDirectory: ['src', 'node_modules'],
      },
      typescript: {},
      // typescript: {
      //   alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      //   project: ['tsconfig.json', 'apps/*/tsconfig.json', 'packages/*/tsconfig.json'], // use an array of glob patterns
      // },
    },
  },
}
