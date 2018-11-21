import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zujian from '@/components/zujian'
import tabcom from '@/components/tabcom'
import tabcoms from '@/components/tabcoms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/zujian',
      name: 'zujian',
      component: zujian
    },
    {
      path: '/tabcom',
      name: 'tabcom',
      component: tabcom
    },
    {
      path: '/tabcoms',
      name: 'tabcoms',
      component: tabcoms
    }
  ]
})
