// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入Vuex定义的js文件
import store from './vue-x/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 使用vuex
  store: store,
  components: { App },
  template: '<App/>'
})
