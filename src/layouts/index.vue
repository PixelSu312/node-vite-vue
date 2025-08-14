<template>
  <LayoutAdmin>
    <template #header>
      <LayoutHeader></LayoutHeader>
      <LayoutTabs></LayoutTabs>
    </template>
    <template #side>
      <Logo></Logo>
      <LayoutMenu></LayoutMenu>
    </template>
    <template #default>
      <router-view>
        <template #default="{ Component, route }">
          <Transition
            @after-leave="afterLeave"
            name="fade" mode="out-in">
            <keep-alive :include="keepAliveLsit">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </Transition>
        </template>
      </router-view>
    </template>
  </LayoutAdmin>
</template>
<script lang="ts" setup>
import LayoutAdmin from "./LayoutAdmin/index.vue"
import LayoutMenu from "./components/LayoutMenu/index.vue"
import LayoutTabs from "./components/LayoutTabs/index.vue"
import LayoutHeader from "./components/LayoutHeader/index.vue"
import Logo from "./components/Logo/index.vue"
import { useTabbarStore } from "@/stores/modules/tabbar"
import { storeToRefs } from "pinia"
import { computed } from "vue"


const tabbarStore = useTabbarStore()
const { keepAlives,unKeepAlives } = storeToRefs(tabbarStore)

const keepAliveLsit = computed(() => {
  const list = [...keepAlives.value].filter((item) =>{
    return unKeepAlives.value.indexOf(item) === -1
  })
  return list
})
const afterLeave = () => {
  tabbarStore.clearExclude()
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from{
  opacity: 0;
  transform: translateX(-30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.header-content{
  display: flex;
  flex-direction: column;
}
</style>
