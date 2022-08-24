/*
 * @Author: 
 * @Date: 2022-03-08 17:07:17
 * @Descripttion: 
 */
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import Login from '@/pages/Login.vue'
import Callback from '@/pages/Callback.vue'
import Errors from '@/pages/Error.vue'
import { routeGuard } from '../auth'
import Profile from '@/pages/profile.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/callback',
        name: 'callback',
        component: Callback
    },
    {
        path: '/error',
        name: 'error',
        component: Errors
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        beforeEnter: routeGuard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router