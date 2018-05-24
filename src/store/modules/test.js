export default {
  namespaced: true,
  state: {
    testState: 'testState'
  },
  mutations: {
    changeTest(state, payLoad) {
      state.testState = payLoad.testState
    }
  },
  actions: {
    changeTestAction(context) {
      context.commit('changeTest', {
        testState: 'changeTestAction'
      })
    }
  },
  getters: {}
}