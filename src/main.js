import Vue from 'vue'
import App from './App.vue'
// import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// import VueLayers modules
import VueLayers from 'vuelayers'
// import VueLayers styles
import 'vuelayers/lib/style.css'
import 'vuejs-dialog/dist/vuejs-dialog.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons, BTabs } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { router } from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import { ClientTable } from 'vue-tables-2'
import VuejsDialog from 'vuejs-dialog'

// register all VueLayers components
Vue.use(VueLayers, {})

Vue.use(ClientTable)

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(VuejsDialog)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use('buefy', {
  defaultIconPack: 'fa',
})

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('b-tabs', BTabs)

Vue.component('apexchart', VueApexCharts)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})
