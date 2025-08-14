<template>
  <div class="layout-admin">
    <!-- -------------side----------------- -->
    <aside :class="['layout-side',{'layout-side--min':appStore.isCollapse}]">
      <slot name="side" />
    </aside>
    <div class="layout-content">
      <!-- -------------header----------------- -->
      <header class="layout-header-container">
        <slot name="header" />
      </header>
      <!-- -------------main----------------- -->
      <main>
        <slot />
      </main>
      <!-- -------------footer----------------- -->
      <footer class="layout-footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots,getCurrentInstance } from "vue"
import { useAppStore } from "@/stores"
const appStore = useAppStore()


defineOptions({
  inheritAttrs: false, // 继承父组件的属性
})

const slots = useSlots()
console.log(slots, "slots")
</script>

<style lang="scss" scoped>
.layout-admin {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  .layout-side {
      width: 200px;
      height: 100%;
      background-color: #000;
      color: #fff;
      flex-shrink: 0;
      transition: width 0.3s ease-in-out;
  }
  .layout-side--min{
      width: 64px;
  }

  .layout-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .layout-header-container {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
    }
    main {
      flex: 1;
      box-sizing: border-box;
      overflow-y: auto;
    }
  }
  .layout-footer {
    height: 60px;
    flex-shrink: 0;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, .12)
}
}

</style>
