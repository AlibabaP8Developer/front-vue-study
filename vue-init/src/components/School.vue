<template>
  <div class="school">
    <h2>学校的名称：{{ name }}</h2>
    <h2>学校的地址：{{ address }}</h2>
    <button @click="test">点我测试hello方法</button>
  </div>
</template>

<script>

export default {
  name: 'School',
  data() {
    return {
      name: '北京师范大学',
      address: '北京市海淀区中关村'
    }
  },
  mounted() {
  },
  methods: {
    test() {
      this.hello()
    }
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
}
</style>
