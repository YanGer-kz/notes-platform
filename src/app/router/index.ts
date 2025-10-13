import { createRouter, createWebHistory } from 'vue-router'

import { useAccountStore } from '../stores'

import AuthPageRoute from '@/pages/auth/auth.route'
import MainPageRoute from '@/pages/main/main.route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...AuthPageRoute,
    ...MainPageRoute,
  ],
})

router.beforeEach((to, _, next) => {
  const accountStore = useAccountStore()

  if (!accountStore.getAccessToken && to.path === '/') {
    return next({ path: '/auth' })
  }

  if (accountStore.getAccessToken && to.path.replace(/\//g, '') === 'auth') {
    return next({ path: '/' })
  }

  return next()
})

export default router
