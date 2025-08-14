// import "./assets/main.css"
import "@/styles/reset.css"
import "virtual:uno.css"
import "element-plus/es/components/message/style/css"
import "element-plus/es/components/message-box/style/css"

import { createApp, h } from "vue"
import {setupStore} from "@/stores"
import {registerIcon} from "@/plugins/registerIcon"
import App from "./App.vue"

import router from "@/router"


function boostrap() {

  const app = createApp(App)
  registerIcon(app)
  setupStore(app)
  app.use(router)
  app.config.performance = true

  app.mount("#app")
  console.log(app.config)
  // 这个配置项用于启用生产环境下的性能监控，它会在控制台输出一些性能相关的信息，比如组件的渲染时间、事件处理函数的执行时间等。
  app.config.performance = true
  // app.config.errorHandler = (err, vm, info) => {
  //   console.log(err, vm, info, "errorHandler")
  // }
  // app.config.warnHandler = (msg, vm, trace) => {
  //   console.log(msg, vm, trace, "warnHandler")
  // }
}

boostrap()
