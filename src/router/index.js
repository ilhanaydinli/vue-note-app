import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import NProgress from 'nprogress'

Vue.use(VueRouter)
Vue.use(Meta)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: page('Home')
    },
    {
      path: '/notes',
      name: 'Notes',
      component: page('Notes')
    },
    {
      path: '/note-add',
      name: 'NoteAdd',
      component: page('NoteAdd'),
      props: true
    },
    {
      path: '/note-edit/:id',
      name: 'NoteEdit',
      component: page('NoteAdd')
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

function page(path) {
  return () =>
    import(/* webpackChunkName: '' */ `../views/${path}.vue`).then(
      (m) => m.default || m
    )
}

export default router
