// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
import '@/assets/css/reset.css'
import 'lib-flexible'

import 'font-awesome/css/font-awesome.css'

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

Vue.use(animate);
import Vuex from 'Vuex'

Vue.use(Vuex);

// 导航钩子解绑全局事件
router.beforeEach((to,from,next)=>{
    window.onscroll=null; //解除事件绑定   
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    next();
})

var store = new Vuex.Store({
    state:{
      // 变量
      chengshi:"北京",
      str:"",
    },
    mutations:{
      // 方法

     
    },
    actions:{
      // 异步方法
      
    },
    getters:{
      // 计算属性

    }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
