<template>
  <div class="student">
    <h2>学生的名称：{{ name }}</h2>
    <h2>学生的年龄：{{ age }}</h2>
    <h2>学生的地址：{{ sex }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>

export default {
  name: 'Student',
  //props: ['name', 'address'],
  //接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   year: Number,
  //   address: String
  // },
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
.student {
  background-color: orange;
}
</style>
