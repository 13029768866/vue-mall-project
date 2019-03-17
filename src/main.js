import Vue from 'vue'
import App from './App'
import router from './router/router'
import FastClick from 'fastclick'

FastClick.attach(document.body)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
