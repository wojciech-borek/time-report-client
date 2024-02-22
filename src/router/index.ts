import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/contractor',
      name: 'contractor',
      component: () => import('../views/ContractorView.vue')
    }
  ]
})

export default router
