<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title'],
  data() {
    return {
      games: ['坦克大战', '超级玛丽', '王者荣耀', '英雄联盟'],
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