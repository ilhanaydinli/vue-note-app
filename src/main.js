import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueLocalStorage from './plugins/vue-localstorage'
import i18n from './plugins/i18n'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  i18n,
  vueLocalStorage,
  render: h => h(App)
}).$mount('#app')