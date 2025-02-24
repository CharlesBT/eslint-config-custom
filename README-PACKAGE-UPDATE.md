
# Package Update Notes

# see @eslint/eslintrc for legacy plugins and extends

# Removed temporarly to prepare v9 migration waiting for plugins to be updated to v9
- eslint-plugin-import / eslint-import-resolver-typescript
- eslint-plugin-promise
- eslint-plugin-vuetify
- eslint-plugin-eslint-comments
extends:
- @vue/eslint-config-typescript

## eslint-plugin-vuetify
waiting full support : https://github.com/vuetifyjs/eslint-plugin-vuetify/issues/93

## eslint-plugin-import
not spporting new eslint flat config yet :
https://github.com/import-js/eslint-plugin-import/issues/2948
interim solution is to move to antfu eslint-plugin-import-x being used in @nuxt/eslint



# SOLVED

## @typescript-eslint/eslint-plugin & @typescript-eslint/parser

- added peer dependency "typescript": "<5.1.0" to avoid avoid lint warning on nuxt project with typescript version < 5.1.0
