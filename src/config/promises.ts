import promise from 'eslint-plugin-promise'

/** @type {import('eslint').Linter.Config[]} */
export default [
  /* eslint-plugin-promise */
  promise.configs['flat/recommended'],
  {
    name: '@charlesbt/eslint-config-custom/promises',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mts,mtsx,vue}'],
    rules: {},
  },
]
