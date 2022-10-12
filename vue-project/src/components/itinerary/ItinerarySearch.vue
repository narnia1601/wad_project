<script setup>
    import ItineraryContinent from './ItineraryContinent.vue'
</script>

<template>
    <div class="mt-3">
        <input type="text" class="form-control" placeholder="Enter a country">
    </div>
    <div class="row mt-3">
        <ItineraryContinent class="col" img="africa"></ItineraryContinent>
        <ItineraryContinent class="col" img="asia"></ItineraryContinent>
        <ItineraryContinent class="col" img="australia"></ItineraryContinent>
        <ItineraryContinent class="col" img="europe"></ItineraryContinent>
        <ItineraryContinent class="col" img="north-america"></ItineraryContinent>
        <ItineraryContinent class="col" img="north-america"></ItineraryContinent>
    </div>
</template>

<script>
    
</script>

<style scoped>
    
</style>
