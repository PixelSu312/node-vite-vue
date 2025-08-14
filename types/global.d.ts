declare const __APP_INFO__ = {
  name: "vue3-vite",
  version: "0.0.0",
  description: "A Vite + Vue 3 project",
  author: "lucian <lucian@lucian.top>",
  buildTime: "2023-03-24 11:16:38"
} as const;

declare const _APP_TITLE_: string

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_NODE_ENV: 'production'|'development'|'test'
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


