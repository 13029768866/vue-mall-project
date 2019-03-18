import Vue from 'vue'
import App from './App'
import router from './router/router'
import FastClick from 'fastclick'
import LyTab from 'ly-tab'

FastClick.attach(document.body)
Vue.use(LyTab)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
