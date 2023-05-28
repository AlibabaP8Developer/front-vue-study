<template xmlns="http://www.w3.org/1999/html">
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前点击时鼠标的坐标为：x: {{ point.x }}，y: {{ point.y }}</h2>
  </div>
</template>

<script>
import { watch, ref, onMounted, reactive, onBeforeUnmount } from 'vue'

export default {
  name: 'Demo',
  setup () {
    let sum = ref(0)

    let point = reactive({
      x: 0,
      y: 0
    })

    function savePoint (event) {
      point.x = event.pageX
      point.y = event.pageY
      console.log(event.pageX, '-', event.pageY)
    }

    onMounted(() => {
      window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('click', savePoint)
    })

    // 返回一个对象（常用）
    return {
      sum,
      point
    }
  }
}
</script>

<style scoped>

</style>
