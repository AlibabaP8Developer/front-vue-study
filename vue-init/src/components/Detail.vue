<template>
  <div>
    <ul>
      <li>消息编号：{{this.$route.query.id}}</li>
      <li>消息标题：{{this.$route.query.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>