<template xmlns="http://www.w3.org/1999/html">
  <div>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName">
    名：<input type="text" v-model="person.lastName">
    全名：<span>{{person.fullName}}</span>
    全名：<input type="text" v-model="person.fullName">
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'Demo',
  setup () {
    let person = reactive({
      firstName: '我大明朱',
      lastName: '元璋',
      age: 11
    })
    // 计算属性--简写（没有考虑计算属性被修改的情况）
    // person.fullName = computed(()=>{
    //   return person.firstName+'-'+person.lastName
    // })

    // 计算属性--完整写法（考虑读和写）
    person.fullName = computed({
      get() {
        return person.firstName+'-'+person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })

    // 返回一个对象（常用）
    return {
      person
    }
  }
}
</script>

<style scoped>

</style>
