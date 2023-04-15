<template>
  <div class="school">
    <h2>学校的名称：{{ name }}</h2>
    <h2>学校的成立年份：{{ myAge }}</h2>
    <h2>学校的地址：{{ address }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  //props: ['name', 'address'],
  //接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   year: Number,
  //   address: String
  // },
  props: {
    name: {
      type: String,
      required: true  // 必须传的
    },
    age: {
      type: Number,
      default: 99
    },
    address: {
      type: String,
      required: true  // 必须传的
    }
  },
  data() {
    return {
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  }
}
</script>

<style scoped>
.school {
  background-color: gray;
}
</style>
