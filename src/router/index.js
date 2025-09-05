import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '@/pages/portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'portfolio',
    component: Portfolio
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router