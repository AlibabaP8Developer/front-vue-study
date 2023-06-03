import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

import {useIntersectionObserver} from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')

// 定义全局指令
// 图片懒加载指令
// 在使用图片的img标签位置加上img-lazy
app.directive('img-lazy', {
    mounted(el, binding) {
        // el:指令绑定的那个元素  img
        // binding：binding.value  指令等于号后面绑定的表达式的值 图片url
        console.log('定义全局指令:', el, binding.value)

        useIntersectionObserver(
            el,
            ([{isIntersecting}], observerElement) => {
                console.log('isIntersecting:', isIntersecting)
                if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value
                }
            },
        )
    }
})
