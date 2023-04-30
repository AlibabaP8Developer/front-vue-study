<template>
  <div class="student">
    <h2>学生的姓名：{{ name }}</h2>
    <h2>学生的地址：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前student组件的实例（vc）</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '赵匡胤',
      sex: '男',
      number: 0
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
    },
    death() {
      this.$destroy()
      // 销毁了当前student组件的实例，销毁后所有student实例的自定义事件全都不生效
    },
    add() {
      console.log('add被调用了')
      this.number++
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
