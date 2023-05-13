<template>
  <h1>App组件</h1>
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <h1>{{sex}}</h1>
  <button @click="sayHello">sayHello</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',

  // 此处只是测试setup
  setup () {
    let name = '朱元璋'
    let age = 11

    function sayHello() {
      alert(`你是${name}, 年龄${age}`)
    }

    // 返回一个函数（重点）
    return {
      name,
      age,
      sayHello
    }

    // 渲染函数（了解）
    // return ()=> h('h1', '黑马')

  },

  data() {
    return {
      sex: '男'
    }
  }
}
</script>

<style>

</style>
