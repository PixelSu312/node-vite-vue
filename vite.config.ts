import { fileURLToPath, URL } from "node:url"

import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import vueDevTools from "vite-plugin-vue-devtools"
import checker from "vite-plugin-checker"
import viteCompression from "vite-plugin-compression"
import { visualizer } from "rollup-plugin-visualizer"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import commonjs from "vite-plugin-commonjs"
import UnoCSS from "unocss/vite"
import VueSteupExtend from "vite-plugin-vue-setup-extend"
import vitePluginInspect from "vite-plugin-inspect"
// https://vite.dev/config/
export default defineConfig(({command, mode})=>{
  const env = loadEnv(mode, process.cwd())
  console.log(env,command,mode,process.env.NODE_ENV)
  console.log(env.VITE_ROUTER_BASE)
  return {
    base:env.VITE_ROUTER_BASE,
    // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
    // vite-env.d.ts
    // declare const _APP_TITLE_: string
    define: {
      _APP_TITLE_: JSON.stringify(env.VITE_APP_TITLE),
    },
    plugins: [
      vue(),
      VueSteupExtend(),
      // vitePluginInspect(),
      //
      // 这个插件可以让你在 Vue 组件中使用 setup 语法
      UnoCSS(),
      // 这个插件可以让你在处理vue文件时使用 Vue 3 的编译器
      vueJsx(),
      // 这个插件可以让你在 Vue 组件中使用 JSX 语法
      commonjs(),
      // 这个插件可以让你在 Vue 组件中使用 CommonJS 模块
      vueDevTools(),
      // 代码检查插件 为什么不打印报错在控制台？
      // 这个插件会在开发环境下检查代码的类型错误和语法错误 ，并在控制台输出错误信息。但是没有，为什么？

      // 但在构建时不会检查类型错误
      checker({
        eslint:
          mode === "production"
            ? false
            : {
              useFlatConfig: true, //此处必须配置
              lintCommand:
                  "eslint  \"./src/**/*.{ts,mts,tsx,vue,js,jsx}\"",
            },
        terminal: true,
        overlay: {
          initialIsOpen: false,
        },
        typescript: {
          tsconfigPath: "./tsconfig.json",
          buildMode: true, // 启用 TypeScript 构建检查
        }
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts:"types/auto-imports.d.ts",

      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            prefix: "icon",
            enabledCollections: ["ep"],
          }),
        ],
        dts:"types/components.d.ts",
        dirs: ["src/components"],
      }),
      Icons({
        autoInstall: true,
      }),
      // viteCompression({
      //   verbose: true, // 是否在控制台输出压缩结果
      //   disable: false, // 是否禁用压缩
      //   threshold: 20*1024, // 文件大小超过此值时才压缩，单位为字节bytes
      //   algorithm: "gzip", // 压缩算法，可选 'gzip'、'brotliCompress' 等
      //   ext: ".gz", // 压缩文件的扩展名
      //   deleteOriginFile: false // 是否删除原始文件
      // })
    ],
    resolve: {
      // 别名配置
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      },
      // 扩展名配置
      extensions: [".js", ".ts", ".json", ".jsx", ".tsx"],
      // 预设配置
    },
    build: {
      target: "chrome61",
      // 产物输出目录
      outDir: "dist",
      // 指定生成静态资源的存放路径（相对于 build.outDir）。在 库模式 下不能使用。默认值是 assets。
      assetsDir: "assets",

      // sourcemap: true,
      // 传递给 Terser 的更多 minify 选项。
      minify: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        plugins: [
          visualizer({open: true, filename: "report.html"}),
        ],
        output: {
          // 生成静态资源的存放路径（相对于 build.outDir）。在 库模式 下不能使用。默认值是 assets。
          assetFileNames: "[ext]/[name].[hash].[ext]",
          // 生成的 js 文件名
          entryFileNames: "js/[name].[hash].js",
          // 生成的 css 文件名
          chunkFileNames: "js/chunk.[name].[hash].js",
          experimentalMinChunkSize: 2*1024
          // manualChunks: (id) => {
          //   // 这里是将 node_modules 中的包单独打包成一个 chunk
          //   if (id.includes("node_modules")) {
          //     if (id.includes("node_modules")) {
          //       // 让每个插件都打包成独立的文件
          //       return id .toString() .split("node_modules/")[1] .split("/")[0] .toString()
          //     }
          //   }
          // }
        }
      }
    },
    server: {
      port: 3000,
      host: "0.0.0.0",
      // 是否开启 gzip 压缩
      gzip: false,
      open: true,

      hmr:{
        overlay: false,
      },
      proxy: {
        "/api": {
          // 代理地址 这个意思是当访问 /api 时，代理到 http://localhost:3000
          target: "http://localhost:8080/",
          // 允许跨域 这个意思是允许跨域请求
          changeOrigin: true,
          // 重写路径 这个意思是将 /api 替换为 ""
          // rewrite: (path) => path.replace(/^\/api/, "")
          // ws: true, // 是否启用 websocket
        },
        "/callback": {
          // 代理地址 这个意思是当访问 /api 时，代理到 http://localhost:3000
          target: "http://localhost:8080/",
          // 允许跨域 这个意思是允许跨域请求
          changeOrigin: true,
          // 重写路径 这个意思是将 /api 替换为 ""
          // rewrite: (path) => path.replace(/^\/api/, "")
          // ws: true, // 是否启用 websocket
        }
      }
    },
    preview:{
      port: 3001, // 预览端口
      cors: true, // 是否启用 cors
      host: "0.0.0.0", // 预览主机
    }
  }
})
