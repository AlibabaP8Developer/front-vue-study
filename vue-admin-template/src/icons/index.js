import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
// 全局注册组件
Vue.component('svg-icon', SvgIcon)

// require.context（目标目录，是否扫描子目录，正则表达式） 扫描目录中的文件
const req = require.context('./svg', false, /\.svg$/)
console.log('req:', req.keys());
const requireAll = requireContext => requireContext.keys().map(requireContext)
// 数组方法 map foreach
// map是循环每一项 svg图片 map(()=>{})
// req函数能够引用图片到项目中
// 将所有的svg都引用到项目中
// 调用函数
requireAll(req)
