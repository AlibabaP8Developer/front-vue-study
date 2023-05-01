<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="@/assets/guobaorou.jpeg">
      <a slot="footer" href="https://knowledge-code.com/#/">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center" v-for="(item, index) in games" :key="index">
        <li>{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <img slot="center" src="@/assets/menglong.jpg">
      <template v-slot:footer>
        <div class="foot">
          <a href="https://cn.bing.com/?FORM=Z9FD1">经典</a>
          <a href="https://cn.bing.com/?FORM=Z9FD1">热门</a>
          <a href="https://cn.bing.com/?FORM=Z9FD1">推荐</a>
        </div>
        <h4>欢迎前来YouTube</h4>
      </template>
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
      films: ['《即日启程》', '《神通乡巴佬》', '《唐山大兄》', '《精武门》']
    }
  }
}
</script>

<style lang="css">
.container, .foot {
  display: flex;
  justify-content: space-around;
}
</style>
