import type { RouteRecordRaw } from "vue-router"
import  Layout  from "@/layouts/index.vue"

const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    component: Layout,
    name: "Dashboard",
    meta: {
      title: "Dashboard",
      icon: "dashboard"
    },
    children: [
      {
        path: "",
        name: "DashboardIndex",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "Dashboard"
        }
      }
    ]
  }
]
export default componentsRouter
