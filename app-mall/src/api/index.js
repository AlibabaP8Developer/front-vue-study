// 当前这个模块：api进行统一管理
import requests from './request'

// 三级联动接口
// api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () => {
    // 发请求
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}
