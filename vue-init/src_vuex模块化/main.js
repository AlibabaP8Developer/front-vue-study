import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from './store/index'

// 关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
