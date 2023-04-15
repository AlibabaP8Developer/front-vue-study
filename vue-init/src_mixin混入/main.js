import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 引入全局混合
import {mixin, data} from './mixin/mixin'

Vue.mixin(mixin)
Vue.mixin(data)

new Vue({
  el: '#app',
  render: h => h(App),
})
