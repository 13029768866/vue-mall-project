import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'
import Chat from './../pages/Chat/Chat'
import Me from './../pages/Me/Me'
import Register from './../pages/Login/Register'


// 首页二级路由引入
import Hot from '../pages/Home/Children/hot/Hot'
import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

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
      component: Home,
      children: [
        { path: '/home', redirect: '/home/hot'},
        // 热门
        { path: 'hot', component: Hot ,meta:{showBottomTab:true} },
        // 鞋包
        { path: 'box', component: Box },
        // 服饰
        { path: 'dress', component: Dress },
        // 电器
        { path: 'ele', component: Ele },
        // 食品
        { path: 'food', component: Food },
        // 百货
        { path: 'general', component: General },
        // 母婴
        { path: 'mbaby', component: Mbaby },
        // 内衣
        { path: 'shirt', component: Shirt },
        // 男装
        { path: 'man', component: Man }
      ],

    },
    {
      path: '/recommend',
      component: Recommend,
      meta:{showBottomTab:true}

    },
    {
      path: '/search',
      component: Search,
      meta:{showBottomTab:true}

    },
    {
      path: '/chat',
      component: Chat,
      meta:{showBottomTab:true}

    },
    {
      path: '/me',
      component: Me,
      meta:{showBottomTab:true}

    },
    // 注册
    {
      path: '/login',
      component: Register
    }
  ]
})
