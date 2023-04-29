<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <school :getSchoolName="getSchoolName"></school>
    <student v-on:atguigu="getStudentName"></student>
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
    getSchoolName(name) {
      console.log('App收到了学校名：', name)
    },
    getStudentName(name) {
      console.log('App收到了学生名', name)
    }
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
