import {getToken, setToken, removeToken} from '@/utils/auth'

const state  = {
  // 从缓存中读取初始值
  token: getToken()
}

const mutations = {
  setToken(state, token) {
    state.token = token
    // 同步到缓存
    setToken(token)
  },
  removeToken() {
    // 删除Vuex的token
    state.token = null
    removeToken()
  }
}

const actions = {
  // context上下文，传入参数
  login(context, data) {
    console.log('data:', data);
    // TODO 调用登录接口
    // 返回token
    context.commit('setToken', '123456')
  }
}

export default {
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  actions
}

