import {defineStore} from "pinia"

export const useAppStore = defineStore("app", {
  state: () => ({
    // 是否显示侧边栏
    sidebar: true,
    // 是否显示全屏
    fullscreen: false,
    // 是否显示顶部进度条
    showProgressBar: false,
    // 是否显示面包屑
    showBreadcrumb: true,
    // 是否收起菜单
    isCollapse: false,
  }),
  actions: {
    // 切换菜单收起状态
    toggleCollapseMenu() {
      this.isCollapse = !this.isCollapse
    },
    // 切换侧边栏
    toggleSidebar() {
      this.sidebar = !this.sidebar
    },
    // 切换全屏
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen
    },
    // 切换顶部进度条
    toggleProgressBar() {
      this.showProgressBar = !this.showProgressBar
    },
  }
})
