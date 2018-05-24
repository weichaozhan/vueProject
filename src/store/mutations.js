export default {
  increment(state) {
    state.count++
  },
  testMutation(state, payLoad) {
    state.testState = payLoad.testState
  }
}