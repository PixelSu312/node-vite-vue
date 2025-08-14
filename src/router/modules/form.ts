import type { RouteRecordRaw } from "vue-router"
import  Layout  from "@/layouts/index.vue"

const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: "/form",
    component: Layout,
    name: "Form",
    meta: {
      title: "Form",
      icon: "form"
    },
    children: [
      {
        path: "",
        name: "FormIndex",
        component: () => import("@/views/form/index.vue"),
        meta: {
          title: "Form"
        }
      }
    ]
  }
]
export default componentsRouter
