import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../views/Contact.vue'
import PortShow from '../views/PortShow.vue'
import Profile from '../views/Profile.vue'
import Creative from '@/views/Creative.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    { path: '/portfolio/Profile', name: 'Profile', component: Profile },
    { path: '/portfolio/Portshow', name: 'Portshow', component: PortShow},
    { path: '/portfolio/Contact', name: 'Contact', component: Contact },
    { path: '/portfolio/Creative', name: 'Creative', component: Creative},
  ],
})

export default router
