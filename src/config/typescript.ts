/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: '@charlesbt/eslint-config-custom/ts',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mts,mtsx,vue}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      // '@typescript-eslint/no-use-before-define': [
      //   'error',
      //   { functions: false, classes: false, variables: true },
      // ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-require-imports': ['error', { allowAsImport: true }],
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    name: '@charlesbt/eslint-config-custom/ts/cjs',
    files: ['**/*.js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    name: '@charlesbt/eslint-config-custom/ts/vue',
    files: ['**/*.vue'],
    rules: {
      '@typescript-eslint/unified-signatures': 'off',
    },
  },
]
