import request from '@/utils/app'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export function getTopCategoryAPI(id) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}
