import { createRouter, createWebHistory } from 'vue-router'

import MainPageRoute from '@/pages/main/main.route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...MainPageRoute,
  ],
})

export default router
