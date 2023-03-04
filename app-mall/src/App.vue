<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 在登录、注册时是隐藏的 -->
    <!-- <Footer v-show="$route.path=='/home' || $route.path=='/search'"></Footer> -->
    <!-- 路由元信息 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
