<template>
  <h1>App组件</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1>{{ sex }}</h1>
  <h1>{{ job.type }}</h1>
  <h1>{{ job.salary }}</h1>
  <button @click="sayHello">sayHello</button>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// import {h} from 'vue'
// 引入ref
import { ref } from 'vue'

export default {
  name: 'App',

  // 此处只是测试setup
  setup () {
    let name = ref('朱元璋')
    let age = ref(11)
    let job = ref({
      type: '"大有皇帝"曾应龙',
      salary: '30k'
    })

    function sayHello () {
      alert(`你是${name}, 年龄${age}`)
    }

    function changeInfo () {
      name.value = '完颜'
      age.value = 19
      job.value.type = '大唐'
      console.log(name, age)
      console.log(job.value)
    }

    // 返回一个函数（重点）
    return {
      name,
      age,
      job,
      sayHello,
      changeInfo
    }

    // 渲染函数（了解）
    // return ()=> h('h1', '黑马')

  },

  data () {
    return {
      sex: '男'
    }
  }
}
</script>

<style>

</style>
