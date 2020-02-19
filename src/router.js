import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    { path: '/dashboard', name: 'dashboard', component: () => import('./views/Dashboard.vue') },
    { path: '/login', component: Login },

    { path: '/user', name: 'user', component: () => import('./views/User/User.vue') },
    { path: '/user/:id', name: 'userwithid', component: () => import('./views/User/UserDetail.vue') },
    { path: '/user/add', name: 'useradd', component: () => import('./views/User/UserAdd.vue') },
    { path: '/user/update/:id', name: 'userupdate', component: () => import('./views/User/UserUpdate.vue') },
    { path: '/user/delete/:id', name: 'userdelete', component: () => import('./views/User/UserDelete.vue') },

    { path: '/config', name: 'config', component: () => import('./views/Config/Config.vue') },
    { path: '/config/:id', name: 'configwithid', component: () => import('./views/Config/ConfigDetail.vue') },
    { path: '/config/add', name: 'configadd', component: () => import('./views/Config/ConfigAdd.vue') },
    { path: '/config/update/:id', name: 'configupdate', component: () => import('./views/Config/ConfigUpdate.vue') },
    { path: '/config/delete/:id', name: 'configdelete', component: () => import('./views/Config/ConfigDelete.vue') },

    { path: '/orgstructure', name: 'orgstructure', component: () => import('./views/OrgStructure/OrgStructure.vue') },
    { path: '/orgstructure/:id', name: 'orgstructurewithid', component: () => import('./views/OrgStructure/OrgStructureDetail.vue') },
    { path: '/orgstructure/add', name: 'orgstructureadd', component: () => import('./views/OrgStructure/OrgStructureAdd.vue') },
    { path: '/orgstructure/update/:id', name: 'orgstructureupdate', component: () => import('./views/OrgStructure/OrgStructureUpdate.vue') },
    { path: '/orgstructure/delete/:id', name: 'orgstructuredelete', component: () => import('./views/OrgStructure/OrgStructureDelete.vue') },

    { path: '/poi', name: 'poi', component: () => import('./views/Poi/Poi.vue') },
    { path: '/poi/:id', name: 'poiwithid', component: () => import('./views/Poi/PoiDetail.vue') },
    { path: '/poi/add', name: 'poiadd', component: () => import('./views/Poi/PoiAdd.vue') },
    { path: '/poi/update/:id', name: 'poiupdate', component: () => import('./views/Poi/PoiUpdate.vue') },
    { path: '/poi/delete/:id', name: 'poidelete', component: () => import('./views/Poi/PoiDelete.vue') },
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
