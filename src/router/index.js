import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta:{
            keepAlive: true
        }
    },
    {
        path:'/login',
        name:'Login',
        meta:{
            title:'登录',
            keepAlive: false
        },
        component: Login
    }
    ]
const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
export default router
