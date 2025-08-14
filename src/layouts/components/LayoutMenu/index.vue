<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    collapse-transition
    :collapse="appStore.isCollapse"
    :unique-opened="true"
    active-text-color="#ffd04b"
    router
  >
    <template v-for="item in menuList" :key="item.path">
      <el-menu-item v-if="!item.children||item.children.length==0" :index="item.path">
        <el-icon :size="18">
          <component :is="item.icon" />
        </el-icon>
        <template #title>
          <span >{{ item.name }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <el-icon :size="18">
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
            {{ child.name }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </el-menu>
</template>


<script setup lang="ts">

import { ref } from "vue"
import { useAppStore } from "@/stores"
const appStore = useAppStore()

const menuList = ref([
  {
    name: "首页",
    path: "/home",
    icon: "HomeFilled"
  },
  {
    name: "回调页面",
    path: "/callback",
    icon: "HomeFilled"
  },
  {
    name: "后台管理",
    path: "/system",
    icon: "Setting",
    children: [
      {
        name: "用户管理",
        path: "/system/user"
      },
      {
        name: "角色管理",
        path: "/system/role"
      },
      {
        name: "菜单管理",
        path: "/system/menu"
      },
      {
        name: "部门管理",
        path: "/system/dept"
      },
      {
        name: "字典管理",
        path: "/system/dict"
      }
    ]
  },
  {
    name: "系统监控",
    path: "/monitor",
    icon: "Warning",
    children: [
      {
        name: "服务监控",
        path: "/monitor/server"
      },
      {
        name: "缓存监控",
        path: "/monitor/cache"
      },
      {
        name: "在线用户",
        path: "/monitor/online"
      }
    ]
  },
  {
    name: "开发工具",
    path: "/dev",
    icon: "EditPen",
    children: [
      {
        name: "表单设计",
        path: "/dev/form"
      },
      {
        name: "代码生成",
        path: "/dev/generator"
      }
    ]
  },
  {
    name: "常见功能",
    path: "/functions",
    icon: "EditPen",
    children: [
      {
        name: "chat聊天",
        path: "/functions/chat"
      },
      {
        name: "文件上传",
        path: "/functions/upload"
      }
    ]
  },
  {
    name: "组件",
    path: "/components",
    icon: "EditPen",
    children: [
      {
        name: "列表",
        path: "/components/list"
      }
    ]
  }
])

</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>
