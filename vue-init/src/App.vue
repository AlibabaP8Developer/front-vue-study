<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
<!--          <a class="list-group-item active" href="./about.html">About</a>-->
<!--          <a class="list-group-item" href="./home.html">Home</a>-->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--
                安装路由组件 默认是4版本
                router3在vue2中使用
                npm i vue-router@3
            -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: 'App',
  components: {Banner},
  mounted() {
  }
}
</script>

<style lang="css">
</style>
