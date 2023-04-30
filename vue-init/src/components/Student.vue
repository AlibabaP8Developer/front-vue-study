<template>
  <div class="student">
    <h2>学生的姓名：{{ name }}</h2>
    <h2>学生的地址：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
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
      this.$emit('atguigu', this.name, this.sex)
      this.$emit('demo')
    },
    unbind() {
      // this.$off('atguigu')  // 解绑一个自定义事件
      // this.$off(['atguigu', 'demo'])  // 解绑多个自定义事件
      this.$off() //  // 解绑全部自定义事件
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
