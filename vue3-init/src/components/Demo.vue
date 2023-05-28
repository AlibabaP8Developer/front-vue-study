<template xmlns="http://www.w3.org/1999/html">
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>工钱：{{ person.job.j1.salary }}</h2>
    <button @click="person.name+='，耶律阿保机的后人'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">增长工钱</button>
  </div>
</template>

<script>
import { watch, ref, watchEffect, reactive } from 'vue'

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

    watch(sum, (newValue, oldValue) => {
      console.log('sum的值变了：',newValue, oldValue)
    }, {
      immediate: true
    })

    // watch(person.value, (newValue, oldValue) => {
    //   console.log('person的值变了：',newValue, oldValue)
    // })

    // 监视 watchEffect用谁监视谁
    watchEffect( () => {
      const x = sum.value
      const y = person.job.j1.salary
      console.log('watchEffect所指定的回调执行了')
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
