// 封装购物车模块
import {defaultStore} from 'pinia'
import {ref} from "vue";

export const useCartStore = defaultStore('cart', () => {
    // 1.定义state - cartList
    const cartList = ref([])
    // 2.定义action - addCart
    const addCart = () => {
        // 添加购物车操作

    }

    return {
        cartList,
        addCart
    }

})
