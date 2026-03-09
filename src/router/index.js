import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home.vue')
    },
    {
        path: '/wealth',
        name: 'Wealth',
        component: () => import('../views/Wealth.vue')
    },
    {
        path: '/investments',
        name: 'Investments',
        component: () => import('../views/Investments.vue')
    },
    {
        path: '/advisory',
        name: 'Advisory',
        component: () => import('../views/Advisory.vue')
    },
    {
        path: '/insights',
        name: 'Insights',
        component: () => import('../views/Insights.vue')
    },
    {
        path: '/careear',
        name: 'Careear',
        component: () => import('../views/Careear.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

export default router
