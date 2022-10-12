import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Itinerary from '../components/Itinerary.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/itineraries',
        component: Itinerary
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router