import Vue from 'vue'
import Router from 'vue-router'

import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import ThirdPage from '@/components/ThirdPage'

Vue.use(Router)

// export default new Router({
//   routes: [
//     { path: '/', name: 'FirstPage', component: FirstPage },
//     { path: '/second', name: 'SecondPage', component: SecondPage },
//     { path: '/third', name: 'ThirdPage', component: ThirdPage },
//   ],
//   mode:"history"
// })

const router = new Router({
  routes: [
    { path: '/', name: 'FirstPage', component: FirstPage },
    { path: '/second', name: 'SecondPage', component: SecondPage },
    { path: '/third', name: 'ThirdPage', component: ThirdPage },
  ],
  mode:"history"
})

router.beforeEach((to, from, next)=>{
	console.log(from);
	console.log(to);
	next();
});

router.afterEach((to, from, next)=>{
	console.log(from);
	console.log(to);
});

export default router