import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import MIXSINS from './js/mixins'

import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'

Vue.config.productionTip = false

Vue.use(MIXSINS)
Vue.use(Donut)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
