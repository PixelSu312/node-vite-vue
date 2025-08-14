import type { RouteRecordRaw } from "vue-router"
import  Layout  from "@/layouts/index.vue"

const functionsRoutes: Array<RouteRecordRaw> = [
  {
    path: "/functions",
    component: Layout,
    name: "Functions",
    redirect: "/functions/chat",
    meta: {
      title: "组件",
      icon: "component"
    },
    children: [
      {
        path: "/functions/chat",
        name: "Chat",
        component: () => import("@/views/functions/chat/index.vue"),
        meta: {
          title: "Element Plus"
        }
      },
      {
        path: "/functions/upload",
        name: "Upload",
        component: () => import("@/views/functions/upload/index.vue"),
        meta: {
          title: "Element Plus"
        }
      }
    ]
  }
]

export default functionsRoutes
