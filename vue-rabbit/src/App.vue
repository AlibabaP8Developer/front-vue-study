<script setup>

import {getCategory} from '@/apis/testAPI'

getCategory().then(res => {
  console.log('res:::', res)
})

</script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView/>
</template>

<style scoped lang="scss">

</style>
