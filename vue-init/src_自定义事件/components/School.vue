<template>
  <div class="school">
    <h2>学校的名称：{{ name | mySlice }}</h2>
    <h2>学校的地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>

export default {
  name: 'School',
  props: ['getSchoolName'],
  data() {
    return {
      name: '北京师范大学',
      address: '北京市海淀区中关村'
    }
  },
  mounted() {
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>
