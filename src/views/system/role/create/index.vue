<template>
  <div class="role-create">
    <el-form>
      <el-form-item label="角色名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive ,computed} from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const form = reactive({
  name: "",
  description: ""
})

const testComputed = computed({
  get: () => {
    return form.name
  },
  set: (value) => {
    form.name = value
  }
})
const test = computed(() => {
  return form.name
})
console.log(testComputed,"testComputed")
const compareForm = ()=>{
  const isSame = JSON.stringify(form) === localStorage.getItem("ROLE_CREATE"+route.query.id)
  console.log(isSame)
  return isSame
}

defineExpose({
  compareForm
})

onMounted(() => {
  localStorage.setItem("ROLE_CREATE"+route.query.id, JSON.stringify(form))
})

onUnmounted(() => {
  localStorage.removeItem("ROLE_CREATE")
})
</script>
