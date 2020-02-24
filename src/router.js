import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/login', component: Login },

    { path: '/user', name: 'user', component: () => import('./views/User/User.vue') },
    { path: '/user/add', name: 'useradd', component: () => import('./views/User/UserAdd.vue') },
    { path: '/user/:id', props: true, name: 'userwithid', component: () => import('./views/User/UserDetail.vue') },
    { path: '/user/update/:id', props: true, name: 'userupdate', component: () => import('./views/User/UserUpdate.vue') },

    { path: '/config', name: 'config', component: () => import('./views/Config/Config.vue') },
    { path: '/config/add', name: 'configadd', component: () => import('./views/Config/ConfigAdd.vue') },
    { path: '/config/:id', props: true, name: 'configwithid', component: () => import('./views/Config/ConfigDetail.vue') },
    { path: '/config/update/:id', props: true, name: 'configupdate', component: () => import('./views/Config/ConfigUpdate.vue') },

    { path: '/orgstructure', name: 'orgstructure', component: () => import('./views/OrgStructure/OrgStructure.vue') },
    { path: '/orgstructure/add', name: 'orgstructureadd', component: () => import('./views/OrgStructure/OrgStructureAdd.vue') },
    { path: '/orgstructure/:id', props: true, name: 'orgstructurewithid', component: () => import('./views/OrgStructure/OrgStructureDetail.vue') },
    { path: '/orgstructure/update/:id', props: true, name: 'orgstructureupdate', component: () => import('./views/OrgStructure/OrgStructureUpdate.vue') },

    { path: '/poi', name: 'poi', component: () => import('./views/Poi/Poi.vue') },
    { path: '/poi/add', name: 'poiadd', component: () => import('./views/Poi/PoiAdd.vue') },
    { path: '/poi/:id', props: true, name: 'poiwithid', component: () => import('./views/Poi/PoiDetail.vue') },
    { path: '/poi/update/:id', props: true, name: 'poiupdate', component: () => import('./views/Poi/PoiUpdate.vue') },
  ],
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/dashboard', '/user', '/config', '/orgstructure', '/poi']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})
