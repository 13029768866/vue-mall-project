import Vue from 'vue'
import App from './App'
import router from './router/router'
import FastClick from 'fastclick'
import LyTab from 'ly-tab'
import store from './store/index' // 引入vuex
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import '@/common/css/style.css'


FastClick.attach(document.body)
Vue.use(LyTab)
Vue.use(Mint)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
