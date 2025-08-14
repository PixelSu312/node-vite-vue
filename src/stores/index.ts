import { createPinia } from "pinia"
import type { App } from "vue"

export * from "./modules/tabbar"
export * from "./modules/app"

export const setupStore = (app:App) => {
  app.use(createPinia())
}
