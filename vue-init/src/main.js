import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 引入插件
import plugins from "@/plugins";
Vue.use(plugins, '大清', 2)

new Vue({
  el: '#app',
  render: h => h(App),
})
