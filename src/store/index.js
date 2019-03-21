// 引入依赖
import Vue from 'vue'
import  Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

// 声明并暴露出供使用
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
