<template>
  <div class="page-root">
    <div>维持宽高比</div>
    <div class="box">
      <div class="inner">
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .box {
    width: 50%;
    .inner {
      position: relative;
      padding-top: 75%;
      height: 0;
      .content {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: red;
      }
    }

  }
}
</style>
