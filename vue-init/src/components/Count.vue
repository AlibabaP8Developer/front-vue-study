<template>
  <div>
    <h1>当前求和为：{{this.$store.state.sum}}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title'],
  data() {
    return {
      n: 1, // 用户选择的数字
    }
  },
  mounted() {
    console.log('vc:', this)
  },
  methods: {
    increment() {
      this.$store.dispatch('jia', this.n)
    },
    decrement() {
    },
    incrementOdd() {

    },
    incrementWait() {
      setTimeout(() => {

      }, 500)
    }
  }
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
  height: 120px;
}
</style>