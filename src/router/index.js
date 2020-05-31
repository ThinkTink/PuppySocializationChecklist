import Vue from 'vue'
import VueRouter from 'vue-router'
import Checklist from '@/views/Checklist.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'checklist',
    component: Checklist
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/random',
    name: 'random',
    component: () => import('@/views/Random.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
