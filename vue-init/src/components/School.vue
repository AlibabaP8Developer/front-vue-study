<template>
  <div class="school">
    <h2>学校的名称：{{name}}</h2>
    <h2>学校的地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '黑马程序员',
      address: '北京昌平'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.school{
  background-color: gray;
}
</style>
