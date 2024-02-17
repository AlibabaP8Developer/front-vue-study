<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      name: {{ name }}
      </div>
      <!-- 使用svg-icon组件 -->
      <!-- 设置iconClass属性=‘图标文件名’ -->
      <svg-icon icon-class='eye'></svg-icon>
      <svg-icon icon-class='example'></svg-icon>
      <svg-icon iconClass='form'></svg-icon>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
