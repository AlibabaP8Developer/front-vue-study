import request from '@/utils/app'

export const getDetail = (id) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}
