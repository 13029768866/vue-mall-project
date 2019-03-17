import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'
import Chat from './../pages/Chat/Chat'
import Me from './../pages/Me/Me'

Vue.use(VueRouter)
export default new VueRouter({
  // 一级路由配置
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
