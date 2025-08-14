import type { RouteRecordRaw } from "vue-router"
import  Layout  from "@/layouts/index.vue"

const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: "/back",
    component: Layout,
    name: "Callback",
    meta: {
      title: "callback",
      icon: "home"
    },
    children: [
      {
        path: "",
        name: "CallbackIndex",
        component: () => import("@/views/callback/index.vue"),
        meta: {
          title: "callback"
        }
      }
    ]
  }
]
export default componentsRouter
