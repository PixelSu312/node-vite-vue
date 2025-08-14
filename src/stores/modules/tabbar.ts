import {defineStore} from "pinia"
import type {RouteLocationNormalizedLoadedGeneric} from "vue-router"

type Istate = {
  tabList:RouteLocationNormalizedLoadedGeneric[],
  keepAlives:Set<string>,
  unKeepAlives:string[],
}

export const useTabbarStore = defineStore("tabbar", {
  state: ():Istate => ({
    tabList:[],
    keepAlives:new Set<string>(),
    unKeepAlives:[],
  }),
  actions: {
    addTab(item:RouteLocationNormalizedLoadedGeneric){
      const whiteList = ["/", "/refresh","/404","/login","/403"]
      if(whiteList.includes(item.path)) return
      if(this.tabList.find(i => i.fullPath === item.fullPath)) return
      this.tabList.push(item)
      this.keepAlives.add(item.name as string)
    },
    removeTab(fullPath:RouteLocationNormalizedLoadedGeneric["fullPath"]){
      const i = this.tabList.findIndex(i => i.fullPath === fullPath)
      const next = this.tabList[i - 1]||this.tabList[i + 1]

      this.tabList = this.tabList.filter(i => i.fullPath !== fullPath)
      for (const i of this.tabList) {
        this.keepAlives.add(i.name as string)
      }
      console.log(this.tabList,this.keepAlives,"====")
      return next
    },
    setExclude(item:RouteLocationNormalizedLoadedGeneric){
      this.unKeepAlives.push(item.name as string)
    },
    clearExclude(){
      this.unKeepAlives = []
    }
  }
})
