<template>
  <div class="layout-header">
    <div class="layout-header_left">
      <el-icon @click="handleCollapse">
        <Expand v-if="!appStore.isCollapse"/>
        <Fold v-else/>
      </el-icon>
    </div>
    <div class="layout-header_right">
      <div class="layout-admin-header-left">vue admin</div>
      <div class="layout-admin-header-left">欢迎您，用户</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores"
const appStore = useAppStore()
const handleCollapse = () => {
  appStore.toggleCollapseMenu()
}
</script>
<style lang="scss" scoped>
.layout-header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  &_left {
    display: flex;
    align-items: center;
    justify-content: center;
    .el-icon {
      font-size: 20px;
      cursor: pointer;
    }
  }
  &_right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
