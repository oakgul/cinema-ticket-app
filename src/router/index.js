import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home';
import MovieDetails from '@/components/MovieDetails';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/movie/:id',
    component: MovieDetails,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
