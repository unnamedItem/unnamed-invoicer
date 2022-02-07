import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import NewBill from '@/views/NewBill'
import LoadBill from '@/views/LoadBill'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-bill',
    name: 'NewBill',
    component: NewBill
  },
  {
    path: '/load-bill',
    name: 'LoadBill',
    component: LoadBill
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
