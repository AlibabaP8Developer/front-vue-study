<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <school :getSchoolName="getSchoolName"></school>
    <!--@或v-on  once一次性-->
    <student @atguigu="getStudentName" @demo="m1"></student>
    <!--ref-->
    <student ref="student"></student>
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
  mounted() {
    setTimeout(() => {
      this.$refs.student.$on('atguigu', this.getStudentName) // 绑定自定义事件
      // this.$refs.student.$once('atguigu', this.getStudentName) // 绑定自定义事件 【一次性】
    }, 3000)
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名：', name)
    },
    getStudentName(name, ...params) {
      console.log('App收到了学生名', name, params)
    },
    m1(){
      console.log('demo事件被触发了')
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
