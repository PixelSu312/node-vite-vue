
<template>
  <el-config-provider v-bind="configProps">
  <keep-alive>
    <RouterView />
  </keep-alive>
  </el-config-provider>
</template>
<script setup lang="ts">
import type {ConfigProviderProps} from "element-plus"
import {reactive,getCurrentInstance,watch} from "vue"
import { useRoute } from "vue-router"
import { useTabbarStore } from "./stores/modules/tabbar"
const route = useRoute()
const tabbarStore = useTabbarStore()
const instance = getCurrentInstance()
const configProps = reactive<Partial<ConfigProviderProps>>({
  size: "default",
  zIndex: 2000,
  emptyValues:["",undefined, null],
  valueOnClear: ()=>"",
})

watch(()=>route,(newVal)=>{
  console.log(newVal,"====")
  tabbarStore.addTab({...newVal})
},{immediate:true,deep:true})
</script>
<style>

</style>
