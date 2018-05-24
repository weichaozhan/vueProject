<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link class="link-nav" to="/HelloWorld">HelloWorld</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods:{
    
  },
  created(){
    // function fun(n,o){
    //   console.log(o)
    //   return {
    //     fun:function(m){
    //       return fun(m,n)
    //     }
    //   }
    // }
    // var a = fun(0);
    // a.fun(1);
    // a.fun(2);
    // a.fun(3);
    // var b = fun(0).fun(1).fun(2).fun(3);
    // var c = fun(0).fun(1);
    // c.fun(2);
    // c.fun(3)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link-nav {
  color: #000;
  text-decoration: none;
}
.link-nav:hover {
  color: orange;
}
</style>