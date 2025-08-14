<template>
  <div class="layout-tabs">
    <el-tabs
      v-model="activeTab" type="card"
      closable
      @edit="handleTabsEdit"
      @tab-click="clickTab">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.fullPath"
        :label="(item.name as string)"
        :name="item.fullPath"
      />
    </el-tabs>
    <div class="action">
      <el-button @click="refreshCurrentPage">刷新当前页面</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTabbarStore } from "@/stores/modules/tabbar"
import { storeToRefs } from "pinia"
import { reactive, ref,watch } from "vue"
import { useRoute,useRouter } from "vue-router"
import { ElMessageBox, type TabPaneName } from "element-plus"
import type { ComponentPublicInstance } from "vue"

const route = useRoute()
const router = useRouter()

const tabbarStore = useTabbarStore()
const { tabList } = storeToRefs(tabbarStore)

type CustomComponentPublicInstance = ComponentPublicInstance & {
  compareForm: () => boolean
}

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: "remove" | "add"
) => {
  if (action === "add") {
  } else if (action === "remove") {

    const matched = route.matched
    console.log(targetName,route.fullPath)
    if(route.fullPath !== targetName){
      tabbarStore.removeTab(targetName as string)
      return
    }
    const instance = matched[matched.length-1].instances.default  as CustomComponentPublicInstance
    if(!instance||!instance.compareForm||instance.compareForm()){
      const next = tabbarStore.removeTab(targetName as string)
      if(next){
        router.push(next)
      }else{
        router.push("/")
      }
      return
    }
    ElMessageBox.confirm("是否关闭当前标签页", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        tabbarStore.removeTab(targetName)
      })
      .catch(() => {

      })
  }

}
const refreshCurrentPage = () => {
  tabbarStore.setExclude(route)
  router.replace({
    path:"/refresh",
    query:{
      redirect:route.fullPath
    }
  })
}

const clickTab= (tab: any) => {
  console.log(tab)
  router.push(tab.props.name)
}

const activeTab = ref("")
watch(route, (newVal) => {
  activeTab.value = newVal.fullPath
})
</script>


<style scoped lang="scss">
.layout-tabs {
  display: flex;
  align-items: center;
}
</style>
