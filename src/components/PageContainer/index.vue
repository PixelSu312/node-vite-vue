<template>
  <el-scrollbar>
    <div class="page-container">
      <slot></slot>
    </div>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.page-container {
  margin: 20px;
  background-color: #fff;
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .12)
}
</style>
