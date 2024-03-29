import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

import VueRouter from "vue-router";
Vue.use(VueRouter)
// 引入路由器
import router from "@/router";

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
