<script setup>

import {getCategory} from '@/apis/testAPI'

getCategory().then(res => {
  console.log('res:::', res)
})

</script>

<template>
  <el-button type="primary">Primary</el-button>
</template>

<style scoped>

</style>
