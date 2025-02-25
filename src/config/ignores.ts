/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: '@charlesbt/eslint-config-custom/ignores',
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
]
