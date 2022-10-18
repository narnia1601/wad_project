import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Itinerary from '../components/Itinerary.vue'
import Map from '../components/Map.vue'

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
    },
    {
        path: '/map',
        component: Map
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router