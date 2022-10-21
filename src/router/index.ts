import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'),
    children:[
      {path:'', name:'blogs.vue',component:()=>import(/* webpackChunkName: "blogs" */ '../views/BlogsView.vue')},
      {path:'projects', name:'projects.vue',component:()=>import(/* webpackChunkName: "frontend" */ '../views/FrontendView.vue')},
    ]
    
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass:'myActiveClass'
})

export default router
