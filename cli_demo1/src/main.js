// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//引入路由模块
import VueRouter from 'vue-router'

// 引入helloworld组件
import HelloWorld from './components/HelloWorld'
// 引入home组件
import Home from './components/Home'

import GoodAdd from './components/GoodAdd';

// 引入vue-resource
import VueResource from 'vue-resource'

Vue.config.productionTip = false
// 使用路由
Vue.use(VueRouter)
// 使用 vue-resource
Vue.use(VueResource)
// 使用viewUI
Vue.use(ViewUI);

// 配置路由
const router = new VueRouter({
	routes:[
		{path:"/", component:Home},
		{path:"/hello", component:HelloWorld},
		{path:'/good/add', component:GoodAdd}
	],
	mode:"history" //消除url中的#
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})


// 执行顺序： index.html -> main.js -> App.vue