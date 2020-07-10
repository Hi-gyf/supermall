import Vue from 'vue'
import VueRouter  from 'vue-router'

Vue.use(VueRouter)

const Index = () => import('../views/index/Index')
const Me = () => import('../views/me/Me')
const Category = () => import('../views/category/Category')
const Car = () => import('../views/car/Car')

const routes = [
    {
        path: '',
        redirect: '/index'
      },
      {
        path: '/index',
        component: Index
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/car',
        component: Car
      },
      {
        path: '/me',
        component: Me
      }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router