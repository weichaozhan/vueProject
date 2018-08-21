<template>
  <div id="app">
    <div class="topbar">
      <div class="topbar__center">
        <i class="logo el-icon-bell"></i>
        <span class="table-of-contents" @click="toggleMenu">目录</span>
      </div>
    </div>
    <div :class="`menu ${menuShow ? 'menu-show' : ''}`">
      <el-menu
      default-active="/"
      :router="true"
      active-text-color="#ffd04b">
        <el-menu-item index="/">
          <span slot="title">
            首页
          </span>
        </el-menu-item>
        <el-menu-item index="/Canvas">
          <span slot="title">
            Canvas
          </span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      menuShow: false,
    }
  },
  methods:{
    toggleMenu() {
      this.menuShow = !this.menuShow
    }
    
  },
  created(){
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
</style>
<style lang="less">
.topbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #111111;
}
.topbar__center {
  margin: auto;
  width: 1200px;
  height: 60px;
  line-height: 60px;
  position: relative;
  overflow: hidden;

  .logo {
    position: absolute;
    left: 0;
    top: 50%;
    font-size: 30px;
    color: #fff;
    transform: translateY(-50%);
  }
  .table-of-contents {
    float: right;
    color: #999999;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
}
.menu {
  width: 260px;
  height: 100%;
  position: fixed;
  top: 0;
  right: -260px;
  z-index: 9999;
  text-align: left;
  background: #fff;
  transition: right .2s;
  &.menu-show {
    right: 0;
    box-shadow: -1px 0 8px -1px #aaa;
  }

  span, .link-nav {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.main-body {
  margin-top: 80px;
}
</style>
