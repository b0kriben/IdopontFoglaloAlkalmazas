import { createRouter, createWebHistory } from 'vue-router'
import IdopontFoglalas from '../views/IdopontFoglalasView.vue'

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
      name: 'AdatokFelvetele',
      component: () => import('../views/AdatokFelveteleView.vue'),
    },
  ],
})

export default router
