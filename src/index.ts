import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import vuetify from 'eslint-plugin-vuetify'
import promise from 'eslint-plugin-promise'
import importX from 'eslint-plugin-import-x'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

// eslint-plugin-import-x needs eslint-import-resolver-typescript in package.json dependencies

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: '@charlesbt/eslint-config-custom2',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      '**/node_modules',
      '**/pnpm-lock.yaml',
      '**/vscode-chrome-debug-userdatadir',
      '**/dist',
      '**/.cache',
      '**/.temp',
      '**/logs',
      '**/docs',
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/essential'],
  ...vuetify.configs['flat/base'],
  promise.configs['flat/recommended'],

  // eslint-plugin-import-x'
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx,vue}'],
    // languageOptions: {
    //   parser: ts.parser,
    //   ecmaVersion: 'latest',
    //   sourceType: 'module',
    // },
    rules: {
      'no-unused-vars': 'off',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
    },
  },
  // eslint-plugin-vue
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
    rules: {
      /* eslint-plugin-vue */
      // 'vue/no-unused-vars': 'error'
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/valid-v-slot': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/no-setup-props-destructure': 'off',
      'vue/no-v-html': 'off',
      // from nuxt
      'constructor-super': 'off', // ts(2335) & ts(2377)
      'getter-return': 'off', // ts(2378)
      'no-const-assign': 'off', // ts(2588)
      'no-dupe-args': 'off', // ts(2300)
      'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
      'no-dupe-keys': 'off', // ts(1117)
      'no-func-assign': 'off', // ts(2539)
      'no-import-assign': 'off', // ts(2539) & ts(2540)
      'no-new-symbol': 'off', // ts(7009)
      'no-obj-calls': 'off', // ts(2349)
      'no-redeclare': 'off', // ts(2451)
      'no-setter-return': 'off', // ts(2408)
      'no-this-before-super': 'off', // ts(2376)
      'no-undef': 'off', // ts(2304)
      'no-unreachable': 'off', // ts(7027)
      'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
      'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
      'prefer-const': 'error', // ts provides better types with const
      'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
      'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
      'valid-typeof': 'off', // ts(2367)
      'vue/no-multiple-template-root': 'off', // disabled by default as multiple root elements are allowed in Vue 3
    },
  },
  {
    // These pages are not used directly by users so they can have one-word names.
    files: [
      './pages/**/*.{js,ts,vue}',
      './layouts/**/*.{js,ts,vue}',
      './app.{js,ts,vue}',
      './error.{js,ts,vue}',
    ],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  {
    // Pages and layouts are required to have a single root element if transitions are enabled.
    files: ['./pages/**/*.{js,ts,vue}', './layouts/**/*.{js,ts,vue}'],
    rules: { 'vue/no-multiple-template-root': 'error' },
  },
  // custom config
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue}'],
    rules: {
      // Allow paren-less arrow functions only when there's no braces
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],

      // Allow async-await
      'generator-star-spacing': 'off',

      // Prefer const over let
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],

      // No single if in an "else" block
      'no-lonely-if': 'error',

      // Force curly braces for control flow,
      // including if blocks with a single statement
      curly: ['error', 'all'],

      // Force dot notation when possible
      'dot-notation': 'error',

      // Force object shorthand where possible
      'object-shorthand': 'error',

      // No useless destructuring/importing/exporting renames
      'no-useless-rename': 'error',

      // eslint best-practices
      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: false,
        },
      ],
      'block-scoped-var': 'error',
      'consistent-return': 'off',
      complexity: ['off', 11],
      eqeqeq: ['error', 'smart'],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-with': 'error',
      'no-void': 'error',
      'no-useless-escape': 'off',
      'vars-on-top': 'error',
      'require-await': 'off',
      'no-return-assign': 'off',
      'max-statements-per-line': ['error', { max: 1 }],

      /* eslint */
      camelcase: 'off',
      'no-unused-vars': 'off',
      'no-var': 'warn',
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'new-cap': 'off',
      'no-undef': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
      'no-lone-blocks': 'error',
      'prefer-promise-reject-errors': 'error',
      'no-await-in-loop': 'warn', // point for optimization with Promise.all https://eslint.org/docs/rules/no-await-in-loop

      /* @typescript-eslint/eslint-plugin */
      '@typescript-eslint/no-unused-vars': 'off',
      // '@typescript-eslint/no-use-before-define': [
      //   'error',
      //   { functions: false, classes: false, variables: true },
      // ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      /* eslint-plugin-import-x */
      'import-x/order': 'error',
      'import-x/first': 'error',
      'import-x/no-unresolved': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',

      /* eslint-plugin-promise */

      /* eslint-plugin-tsdoc */
      // 'tsdoc/syntax': 'warn',
    },
  },

  // Prettier configuration (MUST BE LAST)
  prettierRecommended,
]
