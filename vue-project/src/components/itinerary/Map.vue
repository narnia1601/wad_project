<script setup>
    import { GoogleMap, Marker } from 'vue3-google-map'
</script>

<script>
    export default{
        props: ['coordinatesArr', 'markerClicked', 'totalItineraryArr'],
    }
</script>

<template>
    <div>
        <GoogleMap api-key="AIzaSyCoEURsqHcC4LHB8F1oYGaZRwf9SaVERLI" id="map" :center="coordinatesArr[0]" :zoom="7">
            <Marker @click="markerClicked(totalItineraryArr[idx])" v-for="(coordinate, idx) in coordinatesArr" :key="coordinate.id" :options="{ position: coordinate }" />
        </GoogleMap>
    </div>
</template>

<style scoped>
    #map {
        height: 400px;
        width: 100%;
    }
</style>
