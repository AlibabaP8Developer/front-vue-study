<template>
  <div class="container">
    <Category title="美食">
      <img src="@/assets/guobaorou.jpeg">
    </Category>
    <Category title="游戏">
      <ul v-for="(item, index) in games" :key="index">
        <li>{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <img src="@/assets/menglong.jpg">
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: 'App',
  components: {
    Category
  },
  data() {
    return {
      foods: ['铜火锅', '酸菜粉', '红烧肉', '锅包肉'],
      games: ['坦克大战', '超级玛丽', '王者荣耀', '英雄联盟'],
      films: ['《即日启程》','《神通乡巴佬》','《唐山大兄》','《精武门》']
    }
  }
}
</script>

<style lang="css">
.container {
  display: flex;
  justify-content: space-around;
}
</style>
