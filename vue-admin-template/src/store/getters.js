const getters = {
  sidebar: state => state.app.sidebar,// 取App模块属性
  device: state => state.app.device,
  token: state => state.user.token, // 取user模块属性
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
// getters 便捷访问
export default getters
