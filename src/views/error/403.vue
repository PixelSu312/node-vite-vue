<template>
  <div class="error-page">
    <div class="error-code">403</div>
    <div class="error-text">
      <h2>抱歉，您没有权限访问该页面</h2>
      <p>请联系管理员获取访问权限</p>
      <p>如果您认为这是一个错误，请联系系统管理员</p>
      <p>如果您是管理员，请检查您的权限设置</p>
      <p>如果您是开发人员，请检查您的代码</p>
    </div>
    <div class="error-btn"></div>
    <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
    <div class="error-img">
      <img src="@/assets/images/404.jpg" alt="403" />
    </div>
  </div>
</template>
