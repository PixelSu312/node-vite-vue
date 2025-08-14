<template>
  <div class="page-root">
    <div class="transition-all duration-100">home页面1</div>
    <div @click="open">tes111t</div>
    <component :is="renderJsx" :props="{a:1}"/>

    <TestDialog v-model="dialogInfo.isShow"/>
  </div>
</template>
<script lang="tsx" setup>
import { defineComponent,createVNode,reactive,getCurrentInstance } from "vue"
import { ElMessage } from "element-plus"
import TestDialog from "./TestDialog.vue"

const instance = getCurrentInstance()

console.log(instance,"home.vue")
const dialogInfo = reactive({
  isShow: false,
})

const open = () => {
  ElMessage.success("成功")
}

defineExpose({
  dialogInfo
})
// vue 创建组件方式

// 1. 使用 defineComponent 创建组件
// const Home = defineComponent({
//   name: 'Home',
//   setup() {
//     return () => <div>home页面</div>
//   }
// })

// 2. 使用 defineAsyncComponent 异步加载组件
// const Home = defineAsyncComponent(() => import('./Home.vue')

// 3. 使用 setup 函数直接返回 JSX
// const Home = defineComponent({
//   name: 'Home',
//   setup() {
//     return () => <div>home页面</div>
//   }
// })

// 4. 使用函数式组件
// 特点 是没有状态和生命周期，只能使用 props 和 context
// const Home = () => <div>home页面</div>
const vueComponent = defineComponent({
  name:"VueComponent",
  setup() {
    return () => <div>这是一个Vue组件</div>
  }
})

console.log(createVNode(vueComponent), "vueComponent")

const renderJsx = (val) => {
  console.log(val, "val")
  return (
    <div>
      <div>1111</div>
      <div>test222</div>
    </div>
  )
}
console.log(renderJsx(), "renderJsx")
</script>
