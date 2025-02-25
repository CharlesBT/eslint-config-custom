/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: '@charlesbt/eslint-config-custom/js',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mts,mtsx,vue}'],
    rules: {
      'no-unused-vars': 'off',
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
      'dot-notation': 'off',

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
    },
  },
]
