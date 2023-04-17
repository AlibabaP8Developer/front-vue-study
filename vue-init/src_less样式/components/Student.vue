<template>
  <div class="student">
    <h2 class="qwe">学生的名称：{{ name }}</h2>
    <h2>学生的年龄：{{ age }}</h2>
    <h2>学生的地址：{{ sex }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>

export default {
  name: 'Student',
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

<style scoped lang="less">
.student {
  background-color: orange;
  .qwe {
    font-size: 40px;
  }
}
</style>
