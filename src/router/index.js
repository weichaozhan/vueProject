import Vue from 'vue'
import Router from 'vue-router'

const WelcomePage = resolve => require(['@/components/WelcomePage'], resolve)
// const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)
// const Child = resolve => require(['@/components/Child'], resolve)
const Canvas = resolve => require(['@/components/CanvasStudy'], resolve)
const NotFound = resolve => require(['@/components/NotFound'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: WelcomePage
    },
    {
      path: '/Canvas',
      component: Canvas
    },
    // {
    //   path: '/HelloWorld',
    //   component: HelloWorld,
    //   // children: [
    //   //   {
    //   //     path: '',
    //   //     component: Child
    //   //   }
    //   // ]      
    // },
    // {
    //   path: '/HelloWorld/a',
    //   component: Child,
    // },
    {
      path: '*',
      meta: { requireAuth: true },
      component: NotFound
    }
  ]
})

// 全局导航前置守卫，页面跳转前的处理
router.beforeEach((to, from, next) => {
  next()
})

export default router
