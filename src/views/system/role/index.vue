<template>
  <page-container>
    <div class="table-form">
      <el-form :model="form">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="用户名：">
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="密码：">
              <el-input v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="手机号：">
              <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary">查询</el-button>
              <el-button>重置</el-button>
              <el-button type="primary" plain @click="addUser">新增</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table :data="tableData" stripe>
        <el-table-column
          label="序号" type="index" fixed="left"
          width="60"></el-table-column>
        <el-table-column label="用户名"></el-table-column>
        <el-table-column label="密码"></el-table-column>
        <el-table-column label="手机号"></el-table-column>
      </el-table>
    </div>
  </page-container>
</template>
<script setup lang="ts" name="Role">
import { reactive } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const form = reactive({
  username: "",
  password: "",
  phone: ""
})

const tableData = reactive([
  {
    username: "admin",
    password: "123456",
    phone: "13800138000"
  },
  {
    username: "user",
    password: "123456",
    phone: "13800138000"
  }
])

const addUser = () => {
  router.push("/system/role/create")
}
</script>

<style scoped lang="scss">
.table-form {
  padding: 20px;
}
</style>
