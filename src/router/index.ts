import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import Login from "@/views/login/index.vue"
import NotFound from "@/views/error/404.vue"
import NotPermission from "@/views/error/404.vue"
import refresh from "@/views/refresh.vue"
import Layout from "@/layouts/index.vue"


export const LOCAL_ROUTES: RouteRecordRaw[]= []

function loadModules() {
  const modules= import.meta.glob<{ default: RouteRecordRaw[] }>("./modules/*.ts",{ eager: true })

  Object.keys(modules).forEach((key) => {
    const module = modules[key]
    if (module && module.default) {
      LOCAL_ROUTES.push(...(module.default))
    }
  })
}

loadModules()
console.log(import.meta.env.VITE_ROUTER_BASE,"import.meta.env.VITE_ROUTE_BASE")

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE),
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/refresh",component:Layout,children:[
      {path:"",component:refresh}
    ]},
    {path:"/login",name:"login",component:Login},
    ...LOCAL_ROUTES,
    {path:"/403",name:"403",component:NotPermission},
    {path:"/404",name:"404",component:NotFound},
    {path:"/:pathMatch(.*)",redirect:"/404"}
  ],
})

export default router
