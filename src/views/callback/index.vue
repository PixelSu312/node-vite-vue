<template>

  <div>
    <h1>Callback</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

onMounted(() => {
  console.log(route.query)
})
</script>
