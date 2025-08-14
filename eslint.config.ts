import { globalIgnores } from "eslint/config"
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript"
import pluginVue from "eslint-plugin-vue"

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**","**/*.d.ts"]),
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,


  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
    languageOptions:{
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures:{
          jsx: true
        }
      }
    },
    rules: {
      "quotes": ["error", "double"],
      "semi": ["error", "never"],
      "indent": ["error", 2],
      camelcase: 0,
      "func-call-spacing": 0,
      "space-before-function-paren": ["error", {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }],

      // Override/add rules settings here, such as:
      "@typescript-eslint/no-explicit-any": 0,
      "vue/multi-word-component-names": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-this-alias": [
        "error",
        {
          allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
          allowedNames: [
            "self",
            "context"
          ] // Allow `const self = this`; `[]` by default
        }
      ],
      "vue/valid-define-props": 0,
      "vue/html-indent": ["warn"],
      "vue/max-attributes-per-line": ["warn", {
        singleline: {
          max: 3
        },
        multiline: {
          max: 3
        }
      }],
      "vue/block-lang":0
    }
  },

)
