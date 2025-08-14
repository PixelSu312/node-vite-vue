import type { RouteRecordRaw } from "vue-router"
import  Layout  from "@/layouts/index.vue"

const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: Layout,
    name: "Home",
    meta: {
      title: "Home",
      icon: "home"
    },
    children: [
      {
        path: "",
        name: "HomeIndex",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "Home"
        }
      }
    ]
  }
]
export default componentsRouter
