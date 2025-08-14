import type { RouteRecordRaw } from "vue-router"
import  Layout  from "@/layouts/index.vue"

const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: "/components",
    component: Layout,
    name: "Components",
    redirect: "/components/list",
    meta: {
      title: "组件",
      icon: "component"
    },
    children: [
      {
        path: "/components/list",
        name: "ComponentsList",
        component: () => import("@/views/components/index.vue"),
        meta: {
          title: "Element Plus"
        }
      }
    ]
  }
]

export default componentsRouter
