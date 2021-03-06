// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import store from './store'

import GlComponent from './globalComponent/index.js'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(GlComponent)

/* eslint-disable no-new */
const vueGlobal = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default vueGlobal