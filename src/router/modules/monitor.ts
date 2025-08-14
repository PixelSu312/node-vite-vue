import type { RouteRecordRaw } from "vue-router"
import  Layout  from "@/layouts/index.vue"

const monitorRouter: Array<RouteRecordRaw> = [
  {
    path: "/monitor",
    name: "Monitor",
    component: Layout,
    redirect: "/monitor/cache",
    meta: {
      title: "监控",
      icon: "monitor",
      roles: ["admin", "editor"],
    },
    children: [
      {
        path: "cache",
        name: "Cache",
        component: () => import("@/views/monitor/cache/index.vue"),
        meta: {
          title: "监控2",
          icon: "cache",
          roles: ["admin", "editor"],
        },
      },
      {
        path: "online",
        name: "Online",
        component: () => import("@/views/monitor/online/index.vue"),
        meta: {
          title: "监控3",
          icon: "online",
          roles: ["admin", "editor"],
        }
      }
    ]
  }
]

export default monitorRouter
