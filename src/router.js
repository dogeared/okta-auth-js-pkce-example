import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'

import { loginOkta, redirect, validateAccess } from './auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', component: loginOkta },
    { path: '/redirect', component: redirect },
    { path: '/profile', beforeEnter: validateAccess, component: Profile }
  ]
})
