<template>
  <div></div>
</template>

<script setup lang="ts">

import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

router.replace(route.query.redirect as string)

</script>
