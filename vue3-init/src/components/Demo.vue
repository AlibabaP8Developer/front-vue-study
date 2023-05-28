<template xmlns="http://www.w3.org/1999/html">
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>工钱：{{person.job.j1.salary}}</h2>
    <button @click="person.name+='，耶律阿保机的后人'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">增长工钱</button>
  </div>
</template>

<script>
import { watch, ref, reactive } from 'vue'

export default {
  name: 'Demo',
  setup () {
    let sum = ref(0)
    let msg = ref('你好，耶律大石')
    let person = reactive({
      name: '耶律楚材',
      age: 18,
      job: {
        j1: {
          salary: 10000
        }
      }
    })

    // 情况一：监视ref所定义的一个响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log('sum变了：', newValue, oldValue)
    }, {
      immediate: true
    })

    // 情况二：监视ref所定义的多个响应式数据
    watch([sum, msg], (newValue, oldValue) => {
      console.log('msg变了：', newValue, oldValue)
    }, {
      immediate: true
    })

    // 情况三：监视reactive所定义的一个响应式数据
    // 注意：此处无法正确的获取oldValue
    watch(person, (newValue, oldValue)=>{
      console.log('person变化了', newValue, oldValue)
    })

    // 返回一个对象（常用）
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped>

</style>
