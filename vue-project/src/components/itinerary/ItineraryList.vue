<script setup>
   import ItineraryCard from './ItineraryCard.vue'
</script>

<template>
    <div class="mt-4">
        <div class="row">
            <div class="col-3 mb-4" :key="card.id" v-for="card in cardsNum">
                <ItineraryCard :name="'carouselCaptions' + card"></ItineraryCard>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                asia: ['United Arab Emirates','Vietnam','Tajikistan','Israel','Turkey','Iran','Bhutan','Laoa','Thailand','Lebanon','Kyrgystan','Turkmenistan','Singapore','Myanmar','Maldives','South Korea','Oman','Palestine','Brunei','Kuwait','Iraq','Georgia','Afghanistan','Saudi Arabia','Uzbekistan','Mongolia','Malaysia','Armenia','Nepal','Qatar','Indonesia','North Korea','Pakistan','Sri Lanka','Kazakhstan','Syria','Bahrain','Cambodia','Bangladesh','China','Timor-Leste','Japan','Cyprus','Philippines','Jordan','Azerbaijan','India'],
                cardsNum: 10
            }
        }
    }
</script>

<style scoped>
  
</style>
