<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，使用者进行填充 -->
    <slot name="center">定义一个插槽</slot>
    <slot name="footer">定义一个插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['listData', 'title']
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