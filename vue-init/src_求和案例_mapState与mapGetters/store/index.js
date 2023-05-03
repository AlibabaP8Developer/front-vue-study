// 该文件用于创建Vuex中最核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备actions，用于响应组件中的动作
const actions = {
    jia(context, value) {
        // console.log('actions中的jia调用了', context, value)
        context.commit('JIA', value)
    },
    jian(context, value) {
        // console.log('actions中的jian调用了', context, value)
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        // console.log('actions中的jia调用了', context, value)
        if (context.state.sum % 2) {
            context.commit('JIAODD', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIAWAIT', value)
        }, 500)
    }
}

// 准备mutations，用于操作数据（state）
const mutations = {
    JIA(state, value) {
        console.log('actions中的JIA被调用了', state, value)
        state.sum += value
    },
    JIAN(state, value) {
        console.log('actions中的JIAN被调用了', state, value)
        state.sum -= value
    },
    JIAODD(state, value) {
        console.log('actions中的JIAODD被调用了', state, value)
        state.sum += value
    },
    JIAWAIT(state, value) {
        console.log('actions中的JIAWAIT被调用了', state, value)
        state.sum += value
    },
}

// 准备state，用于存储数据
const state = {
    sum: 0, //  当前的和
    school: '尚硅谷',
    subject: '前端'
}

// 准备getter，用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建store，导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
