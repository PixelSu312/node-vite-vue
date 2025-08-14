import type { RouteRecordRaw } from "vue-router"
import  Layout  from "@/layouts/index.vue"

const systemRoutes: RouteRecordRaw[] = [
  {
    path: "/system",
    name: "System",
    component: Layout,
    redirect: "/system/user",
    meta: {
      title: "系统管理",
      icon: "system",
      roles: ["admin"],
    },
    children: [
      {
        path: "/system/user",
        name: "User",
        component: () => import("@/views/system/user/index.vue"),
        meta: {
          title: "用户管理",
          icon: "user",
          roles: ["admin"],
        },
      },
      {
        path: "/system/role",
        name: "Role",
        component: () => import("@/views/system/role/index.vue"),
        meta: {
          title: "角色管理",
          icon: "role",
          roles: ["admin"],
        },
      },
      {
        path: "/system/role/create",
        name: "RoleCreate",
        component: () => import("@/views/system/role/create/index.vue"),
        meta: {
          title: "新增角色",
          icon: "role",
          roles: ["admin"],
        },
      },
      {
        path: "/system/menu",
        name: "Menu",
        component: () => import("@/views/system/menu/index.vue"),
        meta: {
          title: "菜单管理",
          icon: "menu",
          roles:
            ["admin"],
        },
      },
      {
        path: "/system/dept",
        name: "Dept",
        component: () => import("@/views/system/dept/index.vue"),
        meta: {
          title: "权限管理",
          icon: "dept",
          roles: ["admin"],
        },
      },
      {
        path: "/system/dict",
        name: "Dict",
        component: () => import("@/views/system/dict/index.vue"),
        meta: {
          title: "字典管理",
          icon: "dict",
          roles: ["admin"],
        },
      },
      {
        path: "/system/permission",
        name: "Permission",
        component: () => import("@/views/system/permission/index.vue"),
        meta: {
          title: "权限管理",
          icon: "permission",
          roles: ["admin"]
        }
      }
    ]
  }
]
export default systemRoutes
