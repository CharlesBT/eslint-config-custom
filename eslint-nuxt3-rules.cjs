/*
Rules extracted from latest :
@nuxt/eslint-config https://github.com/nuxt/eslint-config

and former @nuxtjs configs :
@nuxtjs/eslint-config
@nuxtjs/eslint-config-typescript
*/

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts', '*.vue'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions.
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',

        /**********************/
        /* General Code Rules */
        /**********************/

        // Enforce import order
        'import/order': 'error',

        // Imports should come first
        'import/first': 'error',

        // Other import rules
        'import/no-mutable-exports': 'error',

        // Allow unresolved imports
        'import/no-unresolved': 'off',

        // Allow paren-less arrow functions only when there's no braces
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],

        // Allow async-await
        'generator-star-spacing': 'off',

        // Allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

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

        // No async function without await
        'require-await': 'error',

        // Force dot notation when possible
        'dot-notation': 'error',

        'no-var': 'error',

        // Force object shorthand where possible
        'object-shorthand': 'error',

        // No useless destructuring/importing/exporting renames
        'no-useless-rename': 'error',
      },
    },
    {
      // Include typescript eslint rules in *.vue files
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      files: ['*.vue'],
      rules: {
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
      },
    },
    {
      // These pages are not used directly by users so they can have one-word names.
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}',
      ],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
    {
      // Pages and layouts are required to have a single root element if transitions are enabled.
      files: ['**/pages/**/*.{js,ts,vue}', '**/layouts/**/*.{js,ts,vue}'],
      rules: { 'vue/no-multiple-template-root': 'error' },
    },
  ],
}
