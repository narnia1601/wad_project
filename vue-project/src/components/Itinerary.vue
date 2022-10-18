<script setup>
    import Map from './itinerary/Map.vue'
    import ItineraryDetails from './itinerary/ItineraryDetails.vue'
</script>

<template>
  <div class="container mt-4">
      <div class="row">
          <div class="col-8">
              <Map></Map>
          </div>
          <div class="col">
              <ItineraryDetails></ItineraryDetails>
          </div>
      </div>
  </div>
</template>

<style scoped>
  
</style>
