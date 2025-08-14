<template>
  <page-container>
    <span>用户管理</span>
    <el-form :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-button type="primary" @click="test">777</el-button>
    </el-form>
  </page-container>
</template>
<script setup lang="ts" name="User">
import { reactive } from "vue"
import { getTest } from "@/api/test"

const form = reactive({
  username: "",
  password: "",
  phone: ""
})
const test = async () => {
  const res = await getTest()
  console.log(res)
}
</script>
