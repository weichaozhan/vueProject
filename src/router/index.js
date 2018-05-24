import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)
const Child = resolve => require(['@/components/Child'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld/:id',
      component: HelloWorld,
      children: [
        {
          path: '',
          component: Child
        }
      ]      
    }
  ]
})

// 全局导航前置守卫，页面跳转前的处理
router.beforeEach((to, from, next) => {
  next()
})

export default router
