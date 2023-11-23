import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 引入懒加载指令插件并注册
import {lazyPlugin} from '@/directives'

const app = createApp(App)

// pinia文档：
// https://pinia.vuejs.org/zh/getting-started.html
// https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/
const pinia = createPinia()
//  注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(lazyPlugin)
app.use(router)

app.mount('#app')

