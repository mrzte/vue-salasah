import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/Frontend/Beranda.vue'
import BerandaBackend from '../views/Backend/Beranda.vue'
// import Tentang from '../views/Frontend/About.vue'
import Mukena from '../views/Frontend/Produk/Mukena.vue'
import Bajukoko from '../views/Frontend/Produk/Bajukoko.vue'
import Detail from '../views/Frontend/Produk/Detail.vue'
import Login from '../views/Auth/Login.vue'
import Produk from '../views/Backend/Produk/Produk.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/admin/dasbor',
    name: 'BerandaBackend',
    component: BerandaBackend
  },
  {
    path: '/admin/produk',
    name: 'Produk',
    component: Produk
  },
  // {
  //   path: '/tentang',
  //   name: 'Tentang',
  //   component: Tentang
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/mukena',
    name: 'Mukena',
    component: Mukena
  },
  {
    path: '/bajukoko',
    name: 'Bajukoko',
    component: Bajukoko
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
