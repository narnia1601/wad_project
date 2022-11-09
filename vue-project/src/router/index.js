import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Itinerary from '../components/IndividualItinerary/IndividualItinerary.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import CreateItinerary from '../components/createItinerary/CreateItinerary.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/itinerary/:id',
        component: Itinerary
    },
    {
        path: '/home',
        component: Dashboard
    },
    {
        path: '/new',
        component: CreateItinerary
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router