import importX from 'eslint-plugin-import-x'

// eslint-plugin-import-x needs eslint-import-resolver-typescript in package.json dependencies

/** @type {import('eslint').Linter.Config[]} */
export default [
  // eslint-plugin-import-x //
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    name: '@charlesbt/eslint-config-custom/imports',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mts,mtsx,vue}'],
    rules: {
      'import-x/order': 'warn',
      'import-x/first': 'error',
      'import-x/no-unresolved': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'off',
    },
  },
]
