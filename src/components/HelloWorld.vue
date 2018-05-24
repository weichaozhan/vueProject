<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link to="/HelloWorld/a">a</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      count: (state) => {
        return state.count
      }
    }),
    test() {
      return 123456
    }
  },
  mounted() {
    console.log(this.count, this.test)
    console.log('router', this.$route)

    setTimeout(() => {
      // this.$router.go(-1)
      // this.$router.push('/')
    }, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  color: @nice-blue;
  text-shadow: 5px 5px 5px #42b983;

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
}
</style>
