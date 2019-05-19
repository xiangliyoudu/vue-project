import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TagOne from '@/components/TagOne'
import TagTwo from '@/components/TagTwo'
import TagThree from '@/components/TagThree'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'TagOne', component: TagOne },
    { path: '/tagtwo', name: 'TagTwo', component: TagTwo },
    { path: '/tagthree', name: 'TagTwo', component: TagThree },
  ],
  mode:"history"
})
