import  Vue from 'vue'
import  VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = ()=> import('../views/home/home')
const cart = ()=> import('../views/cart/cart')
const category = ()=> import('../views/category/category')
const profiles = ()=> import('../views/profiles/profiles')

const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/profiles',
        component: profiles
    },
]

const router=new VueRouter({
    routes
})

export  default  router