// 定义懒加载插件

import {useIntersectionObserver} from "@vueuse/core/index";

// 定义全局指令
// 图片懒加载指令
// 在使用图片的img标签位置加上img-lazy
export const lazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el:指令绑定的那个元素  img
                // binding：binding.value  指令等于号后面绑定的表达式的值 图片url
                console.log('定义全局指令:', el, binding.value)

                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}], observerElement) => {
                        console.log('isIntersecting:', isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}
