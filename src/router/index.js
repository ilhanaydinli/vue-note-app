import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import NoteAdd from '../views/NoteAdd.vue'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/note-add',
    name: 'NoteAdd',
    component: NoteAdd,
    props: true
  },
  {
    path: '/note-edit/:id',
    name: 'NoteEdit',
    component: NoteAdd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
