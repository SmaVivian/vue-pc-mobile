<template>
  <div class="page-home" :class="{'mobile': $store.state.app.isMobile, 'pc': !$store.state.app.isMobile}">
    <div class="wrap" v-if="!$store.state.app.isMobile">
      <h1>首页 pc 端</h1>
    </div>

    <div class="wrap mobile" v-if="$store.state.app.isMobile">
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

