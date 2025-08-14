<template>
  <div class="chat">
    chat
  </div>
</template>

<script setup lang="ts">
import { ref,computed, watch } from "vue"

const data = ref([
  { name: "张三", age: 18 },
  { name: "李四", age: 19 }
])

const computedData = computed(() => {
  return data.value.map(item => {
    return {
      ...item,
      age: item.age + 1
    }
  })
})

watch(computedData, (newVal, oldVal) => {
  console.log(newVal, oldVal,data.value)
},{ immediate: true })
</script>
