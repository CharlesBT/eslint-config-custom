import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import vuetify from 'eslint-plugin-vuetify'
import { createConfigForNuxt } from '@nuxt/eslint-config'
import promise from 'eslint-plugin-promise'
import importX from 'eslint-plugin-import-x'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

const nuxt = await createConfigForNuxt({
  // options here
})

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
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/essential'],
  ...vuetify.configs['flat/base'],
  ...nuxt,
  promise.configs['flat/recommended'],
  importX.flatConfigs.recommended,
  {
    ignores: ['**/node_modules', '**/dist'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: ts.parser },
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
    },
  },
  // custom config
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue}'],
    rules: {
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

    // Prettier configuration (MUST BE LAST)
    prettierRecommended,
  },
]
