import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Page404 from '@/components/Page404.vue'
import AboutView from '@/views/AboutView.vue'
import Login from '@/components/Login.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: Page404 },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/login', name: 'login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
