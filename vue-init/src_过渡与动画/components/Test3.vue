<template>
  <div>
    <!--
    amimate.css 第三方动画
    npm install animate.css --save
    引入import 'animate.css'

    https://animate.style/
    -->
    <button @click="show">显示/隐藏</button>
    <transition-group name="animate__animated animate__bounce"
                      appear
                      enter-active-class="animate__rubberBand"
                      leave-active-class="animate__backOutRight">
      <h1 v-show="!isShow" key="1">传智播客</h1>
      <h1 v-show="isShow" key="2">黑马程序员</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "Test",
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    show() {
      console.log(this.isShow)
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
}

</style>