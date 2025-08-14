<template>
  <el-dialog
    v-model="visible"
    title="测试对话框"
    width="30%"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
  >
    <div class="dialog-content">
      <p>这是一个测试对话框的内容。</p>
      <p>可以在这里添加更多信息。</p>
      <p>点击下面的按钮关闭对话框。</p>
    </div>
    <template #footer>
      <el-button @click="visible = false">关闭</el-button>
      <el-button type="primary" @click="visible = false">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import {  getCurrentInstance } from "vue"
const visible = defineModel<boolean>("modelValue", {
  default: false,
  type: Boolean,
})
const instance = getCurrentInstance()
console.log(instance, "instance")
</script>
