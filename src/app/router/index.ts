import { createRouter, createWebHistory } from 'vue-router'

import AuthPageRoute from '@/pages/auth/auth.route'
import MainPageRoute from '@/pages/main/main.route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...AuthPageRoute,
    ...MainPageRoute,
  ],
})

export default router
