import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // lazy-loaded
      component: () => import('./views/Dashboard.vue'),
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/User.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/dashboard']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})
