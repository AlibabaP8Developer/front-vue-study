<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为：{{ bigSum }}</h1>
    <h1>完颜麻达葛在{{ school }}，学习{{ subject }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: "Category",
  props: ['title'],
  data() {
    return {
      n: 1, // 用户选择的数字
    }
  },
  computed: {
    /*sum() {
      return this.$store.state.sum
    },
    school() {
      return this.$store.state.school
    },
    subject() {
      return this.$store.state.subject
    }*/

    // 借助mapState生成上述计算属性，从state中读取数据（对象写法）
    // ...mapState({
    //   sum: 'sum',
    //   school: 'school',
    //   subject: 'subject'
    // }),

    // 数组写法
    ...mapState(['sum',
      'school',
      'subject'
    ]),

    // bigSum() {
    //   return this.$store.getters.bigSum
    // },

    // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
    // ...mapGetters({
    //   bigSum: 'bigSum'
    // }),
    // （数组写法）
    ...mapGetters([
      'bigSum'
    ])
  },
  mounted() {
    console.log('vc:', this.$store)
    const x = mapState({
      sum: 'sum',
      school: 'school',
      subject: 'subject'
    })
    console.log('x: ', x)
  },
  methods: {
    // increment() {
    //   this.$store.commit('JIA', this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN', this.n)
    // },

    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations({
      increment: 'JIA',
      decrement: 'JIAN'
    }),

    // 数组写法
    // 'JIA'、'JIAN'生成的名字也是这个，上面调用的时候也要求是这个名
    // ...mapMutations([
    //   'JIA',
    //   'JIAN'
    // ]),

    //==============================
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
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