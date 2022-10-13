<script setup>
    import ItineraryContinent from './ItineraryContinent.vue'
</script>

<template>
    <div class="row mt-3">
        <div class="col-3"></div>
        <div class="col">
          <input type="text" class="form-control rounded rounded-4 col-6" placeholder="Enter a country">
        </div>
        <div class="col-3"></div>
    </div>
    <div class="row mt-3">
        <ItineraryContinent class="col" v-for="continent in continents" :img="continent"></ItineraryContinent>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                continents: ['africa','asia','australia','europe','north-america','south-america']
            }
        }
    }
</script>

<style scoped>
    
</style>
