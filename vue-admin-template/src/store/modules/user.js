const state  = {
  token: null
}

const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

// 
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

