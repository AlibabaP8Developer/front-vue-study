<template>
  <div>
    {{message}}
    <button @click="logMsg">log</button>
    <hr>
    {{ state.count }}
    <button @click="state.count++">count</button>
    <button @click="setCount">{{state.count}}</button>
    <hr>
    {{ count }}
    <button @click="setCount2">{{count}}</button>
  </div>
</template>

<script setup>
// 1.导入函数
import {reactive, ref} from 'vue'

// 2.执行函数，传入一个对象类型的函数
const state = reactive({
  count: 0
})
const setCount = () => {
  state.count++
}

// ref传入参数，【简单类型+对象类型】
const count = ref(0)
const setCount2 = () => {
  // 脚本区域修改ref产生的响应式对象暑假 必须通过.value属性
  count.value++
}

let message = "你好，完颜允恭"
const logMsg = () => {
  console.log(message)
}
</script>

<style scoped>

</style>
