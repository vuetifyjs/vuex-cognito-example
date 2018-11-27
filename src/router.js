import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth/signin',
      component: () => import('@/views/Signin')
    },
    {
      path: '/auth/signup',
      component: () => import('@/views/Signup')
    },
    {
      path: '/authenticated',
      component: () => import('@/views/Authenticated')
    },
    { path: '*', redirect: '/auth/signin' }
  ]
})
