// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// import VueResource from 'vue-resource'
// 引入路由
import VueRouter from 'vue-router'

import ShowBlogs from './components/ShowBlogs'

// 引入路由信息
import Routes from './routes'

// 引入axios
import axios from 'axios'

// 全局配置
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'
// axios.defaults.headers.common['Authorization'] = 'Token'
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'



Vue.config.productionTip = false

// Vue.use(VueResource)

//自定义全局指令
// Vue.directive('rainbow', {
// 	bind(el, binding, vnode){
// 		el.style.color = "#" + Math.random().toString(16).slice(2, 8);

// 	}
// })

Vue.directive('theme', {
	bind(el, binding, vnode){
		if(binding.value == 'wide') {
			el.style.maxWidth = "100%";
		} else if(binding.value == 'narrow') {
			el.style.maxWidth = "50%";
		}

		if(binding.arg == 'column') {
			el.style.background = "#6677cc";
			el.style.padding = "20px";
		}
	}
})


// 自定义全局过滤器
// Vue.filter("to-uppercase", function(value){
// 	return value.toUpperCase();
// })

Vue.filter("snippet", function(value){
	return value.slice(1, 10) + "...";
})


Vue.use(VueRouter)

// 配置
const router = new VueRouter({
	routes: Routes,
	mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 使用路由
  router:router
})
