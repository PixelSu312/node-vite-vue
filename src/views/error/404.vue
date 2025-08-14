<template>
  <div class="error-page">
    <div class="error-code">404</div>
    <div class="error-text">页面不存在</div>
    <div class="error-btn"></div>
    <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
    <div class="error-img">
      <img src="@/assets/images/404.jpg" alt="404" />
    </div>
  </div>
</template>
