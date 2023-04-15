<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的dom元素</button>
    <student ref="sc" name="完颜璟" address="上京会宁府" :age="10"></student>
    <student name="完颜雍" address="燕京" ></student>
    <student name="爱新觉罗弘历" address="北平" :age="11"></student>
  </div>
</template>

<script>
import Student from "@/components/Student";

export default {
  name: 'App',
  components: {
    Student
  },
  data() {
    return {
      msg: '欢迎学习Vue！'
    }
  },
  methods: {
    showDOM() {
      console.log('---', this.$refs)
    }
  }
}
</script>

<style>

</style>
