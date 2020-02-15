import '@babel/polyfill'
import Vue from 'vue'
// import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// import VueLayers modules
import VueLayers from 'vuelayers'
// import VueLayers styles
import 'vuelayers/lib/style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.use('buefy', {
  defaultIconPack: 'fa',
})

// register all VueLayers components
Vue.use(VueLayers, {
  // global data projection, see https://vuelayers.github.io/#/quickstart?id=global-data-projection
  // dataProjection: 'EPSG:4326',
})
Vue.use(BootstrapVue)

Vue.component('apexchart', VueApexCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})
