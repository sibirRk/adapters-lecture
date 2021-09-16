import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list1',
    name: 'ListOne',
    component: () => import(/* webpackChunkName: "list1" */ '../views/List.vue'),
  },
  {
    path: '/list2',
    name: 'ListTwo',
    component: () => import(/* webpackChunkName: "list2" */ '../views/List-Object.vue'),
  },
  {
    path: '/list3',
    name: 'ListThree',
    component: () => import(/* webpackChunkName: "list3" */ '../views/List-Class.vue'),
  },
  {
    path: '/list-ts',
    name: 'ListTS',
    component: () => import(/* webpackChunkName: "list3" */ '../views/List-ts.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
