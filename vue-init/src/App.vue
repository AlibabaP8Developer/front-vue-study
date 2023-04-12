<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的dom元素</button>
    <school ref="sc"></school>
    <school></school>
    <school></school>
  </div>
</template>

<script>
import School from "@/components/School";

export default {
  name: 'App',
  components: {
    School
  },
  data() {
    return {
      msg: '欢迎学习Vue！'
    }
  },
  methods: {
    showDOM() {
      console.log('---', this.$refs.sc)
    }
  }
}
</script>

<style>

</style>
