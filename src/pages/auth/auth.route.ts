import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]> [
  {
    path: '/auth',
    component: () => import('./auth.page'),
  }
]
