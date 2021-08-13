import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import NoteAdd from '../views/NoteAdd.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/notlar',
    name: 'Notlar',
    component: Notes
  },
  {
    path: '/notekle',
    name: 'NotEkle',
    component: NoteAdd,
  },
  {
    path: '/notduzenle/:id',
    name: 'NotDuzenle',
    component: NoteAdd
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router