import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: _ => {
      return { path: '/home' }
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: false,
      showOnNavbar: true,
      showNavbar: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: false,
      showOnNavbar: true,
      showNavbar: true
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      requiresAuth: false,
      showOnNavbar: true,
      showNavbar: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
