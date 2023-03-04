import axios from "axios";

// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置一下
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径中会出现api
    // 接口中，路径都带有/api
    baseURL: '/api',
    // 请求超时时间
    timeout: 5000
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // config:配置对象，对象里面有一个属性，header请求头
    return config;
})

// 响应拦截器
requests.interceptors.response.use(
    // 成功的回调
    (res)=>{
        return res.data
    }, 
    // 失败的回调
    (error)=>{
        return Promise.reject(new Error("faile"))
    }
)

export default axios
