<template>
  <div class="school">
    <h2 @click="showName">学生的名称：{{ name }}</h2>
    <h2>学生的年龄：{{ age }}</h2>
    <h2>学生的地址：{{ sex }}</h2>
  </div>
</template>

<script>
// import {mixin, data} from '@/mixin/mixin'

export default {
  name: 'School',
  //props: ['name', 'address'],
  //接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   year: Number,
  //   address: String
  // },
  // mixins: [mixin, data],
  props: {
    age: {
      type: Number,
      default: 99
    }
  },
  data() {
    return {
      name: '赵匡胤',
      sex: '男'
    }
  }
}
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>
