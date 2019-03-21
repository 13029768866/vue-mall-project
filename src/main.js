import Vue from 'vue'
import App from './App'
import router from './router/router'
import FastClick from 'fastclick'
import LyTab from 'ly-tab'
import store from './store/index' // 引入vuex


FastClick.attach(document.body)
Vue.use(LyTab)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
