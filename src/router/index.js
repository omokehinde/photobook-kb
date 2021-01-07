import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import Albums from '../views/Albums.vue';
import AlbumDetails from '../views/AlbumDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/album/:id',
    name: 'AlbumDetails',
    component: AlbumDetails,
    meta: {requiresAuth: true}
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
    meta: {requiresAuth: true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
