import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blogs',
      name: 'blogs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogsView.vue'),
    },
    {
      path:'/postulate',
      name:'postulate',
      component:() => import('../views/FormularioView.vue')
    },
    {
      path:'/thanks',
      name:'thanks',
      component: () => import('../views/ThanksView.vue'),
    },
    {
      path:'/blogs/Juan',
      name:'Juan',
      component: () => import('../views/blogs/BlogJuanView.vue'),
    },
    {
      path:'/blogs/Ana',
      name:'Ana',
      component: () => import('../views/blogs/BlogAnaView.vue'),
    },
    {
      path:'/blogs/Mario',
      name:'Mario',
      component: () => import('../views/blogs/BlogMarioView.vue'),
    },
    {
      path:'/blogs/María',
      name:'María',
      component: () => import('../views/blogs/BlogMariaView.vue'),
    }
  ]
})

export default router
