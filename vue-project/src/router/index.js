import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Itineraries from '../components/Itineraries.vue'
import Itinerary from '../components/Itinerary.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/itineraries',
        component: Itineraries
    },
    {
        path: '/map',
        component: Itinerary
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router