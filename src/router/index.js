import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import xqing from '@/components/xqing'
import cshi from '@/components/cshi'
import betterscroll from '@/components/betterscroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/xqing',
      name: 'xqing',
      component: xqing
    },
    {
      path: '/cshi',
      name: 'cshi',
      component: cshi
    },
    {
      path: '/betterscroll',
      name: 'betterscroll',
      component: betterscroll
    },
   
  ]
})
