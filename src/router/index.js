import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notlar from '../views/Notlar.vue'
import NotEkle from '../views/NotEkle.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notlar',
    name: 'Notlar',
    component: Notlar
  },
  {
    path: '/notekle',
    name: 'NotEkle',
    component: NotEkle
  },
  {
    path: '/notduzenle/:id',
    name: 'NotDuzenle',
    component: NotEkle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router