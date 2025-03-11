import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import vuetify from 'eslint-plugin-vuetify'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // eslint-plugin-vue //
  ...vue.configs['flat/recommended'],
  // ...vuetify.configs['flat/base'],
  {
    name: '@charlesbt/eslint-config-custom/vue',
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
      'vue/attribute-hyphenation': 'off',
    },
  },
  {
    name: '@charlesbt/eslint-config-custom/vue/multiword',
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
    name: '@charlesbt/eslint-config-custom/vue/no-multiroot',
    // Pages and layouts are required to have a single root element if transitions are enabled.
    files: ['./pages/**/*.{js,ts,vue}', './layouts/**/*.{js,ts,vue}'],
    rules: { 'vue/no-multiple-template-root': 'error' },
  },
]
