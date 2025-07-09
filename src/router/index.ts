import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/app',
      name: 'app',
      component: () => import('../views/Application.vue'),
    },
    {
      path: '/guidelines',
      name: 'about',
      component: () => import('../views/Guidelines.vue'),
    },
  ],
})

export default router
