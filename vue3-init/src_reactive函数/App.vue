<template>
  <h1>App组件</h1>
  <h1>{{ person.name }}</h1>
  <h1>{{ person.age }}</h1>
  <h1>{{ person.sex }}</h1>
  <h1>{{ person.job.type }}</h1>
  <h1>{{ person.job.salary }}</h1>
  <h1>{{ school.type }}</h1>
  <h1>{{ school.salary }}</h1>
  <h1>爱好：{{ person.hobbyHuaiMan }}</h1>
  <h1>测试的数据：{{ school.a.b.c.d }}</h1>
  <button @click="changeInfoSchool">修改人的信息reactive</button>
</template>

<script>
// 引入reactive
import { reactive } from 'vue'

export default {
  name: 'App',

  // 此处只是测试setup
  setup () {
    let school = reactive({
      type: '大清皇帝圣祖爷康熙皇帝',
      salary: '666k',
      a: {
        b: {
          c: {
            d: 250
          }
        }
      }
    })

    let hobbyHuaiMan = ['吃', '喝', '嫖', '赌', '抽烟', '喝酒', '烫头', '纹身', '玩大型网络游戏', '看主播刷礼物', '搞破鞋']

    let hobbyGoodMan = ['学习', '考试', '上图书馆', '读好书', '不抽烟', '不喝酒', '不破鞋', '不耍钱', '内卷严重']

    let person = reactive({
      name: '朱元璋',
      age: 11,
      job: {
        type: '洪武皇帝',
        salary: '666k',
      },
      hobbyHuaiMan,
      hobbyGoodMan
    })

    function changeInfoSchool () {
      person.name = '爱新觉罗'
      person.age = 19
      person.job.type = '大清'
      school.type = '国立师范大学'
      school.salary = '9999k'
      school.a.b.c.d = 99999

      person.hobbyHuaiMan[1] = '卷起来'
      person.hobbyHuaiMan[2] = person.hobbyGoodMan[3]
      person.hobbyHuaiMan[3] = person.hobbyGoodMan[4]
    }

    // 返回一个函数（重点）
    return {
      school,
      person,
      changeInfoSchool
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
