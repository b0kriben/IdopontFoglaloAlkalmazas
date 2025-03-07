import { createRouter, createWebHistory } from 'vue-router'
import IdopontFoglalasView from '../views/IdopontFoglalasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IdopontFoglalas',
      component: IdopontFoglalasView,
    },
    {
      path: '/adatok',
      name: 'adatok',
      component: () => import('../views/AdatokFelveteleView.vue'),
    },
  ],
})

export default router
