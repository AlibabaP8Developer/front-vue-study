// 引入不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象--app（类似vue2中的vm，比vm更轻）

const app = createApp(App)

console.log('app:', app)
app.mount('#app')
