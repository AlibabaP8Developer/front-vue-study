<template>
  <div class="student">
    <h2>学生的姓名：{{ name }}</h2>
    <h2>学生的地址：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '赵匡胤',
      sex: '男'
    }
  },
  methods: {
    sendStudentName() {
      // 触发student组件实例身上的atguigu事件
      this.$emit('atguigu', this.name)
    }
  }
}
</script>

<style scoped lang="less">
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
