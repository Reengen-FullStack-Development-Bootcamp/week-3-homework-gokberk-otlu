import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import vuetify from './plugins/vuetify'
import './plugins/vue-router'

import VueRouter from 'vue-router'
import { routes } from './routes/routes'

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  vuetify,
  store: store,
  router: router
}).$mount('#app')
