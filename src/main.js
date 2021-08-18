import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
