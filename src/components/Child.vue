<template>
  <div>
    Child
  </div>
</template>

<script type="text/ecmascript-6">
import {
  testAPI
} from '@/api/global'

export default {
  data() {
    return {

    }
  },
  created() {
    testAPI({
      a: 1
    }, (res) => {
      console.log('from request', res)
    })
      .then(res => {
        if (res.code === 1000000) {
          console.log('from child', res)
        } else {
          alert(res.msg)
        }
      })
      .catch(err => {
        console.log('Child', err)
      })
    this.$store.commit('test/changeTest', {testState: 'change testState'})
    this.$store.commit('testMutation', {testState: 'change test'})
    this.$store.dispatch('testRootAction')
    console.log('test.testState', this.$store.state.test.testState)
    console.log('testState', this.$store.state.testState)
    this.$store.dispatch('test/changeTestAction')
    console.log(`this.$store.dispatch('test/changeTestAction')`, this.$store.state.test.testState)
  },
  components: {
  }
}
</script>

<style scoped>
</style>
