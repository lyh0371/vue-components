/*
 * @Date: 2020-08-04 09:08:16
 */
import Vue from 'vue'
import VueRouter from './lrouter'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
