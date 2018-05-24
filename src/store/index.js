import Vue from 'vue'
import Vuex from 'vuex'

import rootMutation from './mutations'
import rootAction from './action'

// 引入 store 模块
import test from './modules/test'

Vue.use(Vuex)

const modules = {
  test: test
}

export default new Vuex.Store({
  state: () => {
    return {
      count: 0,
      testState: 0
    }
  },
  mutations: rootMutation,
  actions: rootAction,
  modules: modules
})