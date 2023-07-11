// 封装所有用户相关的接口函数
import request from '@/utils/app'

export const loginAPI = ({account, password}) => {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}
