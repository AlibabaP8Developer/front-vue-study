<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="item in personList">{{ item.id + '-' + item.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'

export default {
  name: "Person",
  components: {},
  computed: {
    // personList() {
    //   return this.$store.state.personList
    // },
    ...mapState({
      personList: 'personList'
    }),
    sum() {
      return this.$store.state.sum
    }
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name
      }
      console.log('personObj:', personObj)
      this.$store.commit('ADD_PERSON', personObj)
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>