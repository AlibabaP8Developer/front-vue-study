<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的dom元素</button>
    <student ref="sc" :age="10"></student>
    <school></school>
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: 'App',
  components: {
    Student,
    School
  },
  data() {
    return {
      msg: '欢迎学习Vue！'
    }
  },
  methods: {
    showDOM() {
      console.log('---', this.$refs.sc.name)
      console.log('---', this.$refs.title)
    }
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
