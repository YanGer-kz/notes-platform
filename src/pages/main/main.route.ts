import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]> [
  {
    path: '/',
    component: () => import('./main.page'),
  }
]
