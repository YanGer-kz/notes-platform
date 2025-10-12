import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]> [
  {
    path: '/auth/:type?',
    component: () => import('./auth.page'),
    beforeEnter: (to, _, next) => {
      if (to.path.replace(/\//g, '') === 'auth') {
        return next({ path: '/auth/sign-in' })
      }

      return next()
    }
  }
]
