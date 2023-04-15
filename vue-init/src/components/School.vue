<template>
  <div class="school">
    <h2 @click="showName">学校的名称：{{ name }}</h2>
    <h2>学校的地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入混合
import {mixin, data} from '@/mixin/mixin'

export default {
  name: 'School',
  //props: ['name', 'address'],
  //接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   year: Number,
  //   address: String
  // },
  mixins: [mixin, data],
  data() {
    return {
      name: '北京师范大学',
      address: '北京市海淀区中关村'
    }
  }
}
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>
