import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Itineraries from '../components/Itineraries.vue'
import Itinerary from '../components/Itinerary.vue'
import IndividualItinerary from '../components/IndividualItinerary/IndividualItinerary.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import ItineraryTemplate from '../components/ItineraryTemplate/ItineraryTemplate.vue'

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
    },
    {
        path: '/individualitinerary',
        component: IndividualItinerary
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/itinerarytemplate',
        component: ItineraryTemplate
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router