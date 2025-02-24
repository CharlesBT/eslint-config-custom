// import js from '@eslint/js'
// import ts from 'typescript-eslint'
// import vue from 'eslint-plugin-vue'
// import vuetify from 'eslint-plugin-vuetify'
// import promise from 'eslint-plugin-promise'
import { createConfigForNuxt } from '@nuxt/eslint-config'
// import prettier from 'eslint-plugin-prettier'

// console.log(js.configs.recommended)
// console.log(...ts.configs.recommended)
// console.log(...vue.configs['flat/essential'])
// console.log(...vuetify.configs['flat/base'])
// console.log(promise.configs['flat/recommended'])

const nuxt = await createConfigForNuxt({
  // options here
})
console.log(...nuxt)
