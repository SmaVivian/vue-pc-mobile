<template>
  <div class="page-home" :class="{'mobile': _isMobile, 'pc': !_isMobile}">
    <div class="wrap" v-if="!_isMobile">
      <h1>首页 pc 端</h1>
    </div>

    <div class="wrap mobile" v-if="_isMobile">
      <h1>首页 移动端 端</h1>
    </div>
  </div>
</template>

<script>
import '@assets/css-mobile/home/index.scss'
export default {}
</script>

<style lang="scss">
.wrap {
  h1 {
    font-size: 30px;
  }
}
</style>

