<script setup>
  import ItinerarySearch from './itinerary/ItinerarySearch.vue'
  import ItineraryCard from './itinerary/ItineraryCard.vue'
  import FavouriteItinerary from './itinerary/FavouriteItinerary.vue'
</script>

<template>
  <div class="container-fluid mt-3">
    <ItinerarySearch :searchCity="searchCity"></ItinerarySearch>
    <div class="mt-4">
      <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" :key="idx" v-for="(itinerary, idx) in itineraryArr">
              <ItineraryCard :imageArr="imageArr[idx]" :link="itinerary.title" :favouritesArr="favouritesArr" :toggleFavouritesArr="toggleFavouritesArr" :name="'carouselCaptions' + idx" :data="itinerary"></ItineraryCard>
          </div>
      </div>

      <!-- <div class="row">
          <div class="col-8">
              <div class="row">
                  <div class="col-lg-4 col-md-6 mb-4" :key="idx" v-for="(itinerary, idx) in itineraryArr">
                      <ItineraryCard :imageArr="imageArr[idx]" :link="itinerary.title" :favouritesArr="favouritesArr" :toggleFavouritesArr="toggleFavouritesArr" :name="'carouselCaptions' + idx" :data="itinerary"></ItineraryCard>
                  </div>
              </div>
          </div>
          <div class="col-4">
              <FavouriteItinerary :favouritesArr="favouritesArr" :toggleFavouritesArr="toggleFavouritesArr" :itineraries="itineraryArr"></FavouriteItinerary>
          </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import VueCookies from 'vue-cookies'
  export default{
    data(){
        return {
            itineraryArr: [],
            favouritesArr: [],
            lat: 0.0,
            lng: 0.0,
            hasSearched: false,
            weather: '',
            imageArr: []
        }
    },
    mounted() {
        this.getItineraries()
        this.favouritesArr = JSON.parse(VueCookies.get('favourites'))
    },
    methods: {
        getItineraries(){
          var url = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app/itineraries'
          axios.get(url)
          .then(res => {
            console.log(res)

              this.itineraryArr = res.data
              this.getImages(this.itineraryArr)
          })
        },
        getImages(itineraryArr){
          this.imageArr = []
          itineraryArr.map(itinerary => {
            var imageArr = []
            itinerary.attractions.map(attraction => {
              attraction.map(data => {
                imageArr.push(data.image)
              })
            })
            this.imageArr.push(imageArr)
          })
          console.log(this.imageArr)
        },
        searchCity(lat, lng, city, weatherCondition){
          var outdoorArr = ['shower rain','rain','thunderstorm','snow','mist', 'overcast clouds', 'light rain', 'moderate rain']
          if(city == ''){
            this.getItineraries()
          }else if(this.hasSearched){
            var url = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app/itineraries'
            axios.get(url)
            .then(res => {
              this.itineraryArr = res.data
              this.lat = lat
              this.lng = lng
              var newArr = []
              this.itineraryArr.map(itinerary => {
                itinerary.attractions.map((attraction, idx) => {
                  var locations = 0
                  var averageLat = 0.0
                  var averageLng = 0.0
                  var outDoorCounter = 0
                  attraction.map(location => {
                    locations += 1
                    averageLat += location.lat
                    averageLng += location.lng
                    if(location.venue == 'outdoors' && idx == 0){
                      outDoorCounter += 1
                    }else if(location.venue == 'indoors' && idx == 0){
                      outDoorCounter -= 1
                    }
                  })
                  averageLat /= locations
                  averageLng /= locations
                  if(Math.abs(averageLat - this.lat) < 1 && Math.abs(averageLng - this.lng) < 1){
                    if(outdoorArr.includes(weatherCondition) && outDoorCounter < 0){
                    newArr.push(itinerary)
                    }else if(!outdoorArr.includes(weatherCondition)){
                      newArr.push(itinerary)
                    }
                  }
                })
              })
              this.itineraryArr = newArr
              this.getImages(this.itineraryArr)
              this.hasSearched = true
              })
          }else{
            this.lat = lat
            this.lng = lng
            var newArr = []
            this.itineraryArr.map(itinerary => {
              var averageLat = 0.0
              var averageLng = 0.0
              itinerary.attractions.map((attraction, idx) => {
                var locations = 0
                var outDoorCounter = 0
                attraction.map(location => {
                  locations += 1
                  averageLat += location.lat
                  averageLng += location.lng
                  if(location.venue == 'outdoors' && idx == 0){
                    outDoorCounter += 1
                  }else if(location.venue == 'indoors' && idx == 0){
                    outDoorCounter -= 1
                  }
                })
                averageLat /= locations
                averageLng /= locations
                if(Math.abs(averageLat - this.lat) < 1 && Math.abs(averageLng - this.lng) < 1){
                  if(outdoorArr.includes(weatherCondition) && outDoorCounter < 0){
                    newArr.push(itinerary)
                  }else if(!outdoorArr.includes(weatherCondition)){
                    newArr.push(itinerary)
                  }
                }
              })
            })
            this.itineraryArr = newArr
            this.getImages(this.itineraryArr)
            this.hasSearched = true
          }
        },
        toggleFavouritesArr(id){
            const cookie = VueCookies.get('favourites')
            if(cookie == null){
                VueCookies.set('favourites', JSON.stringify([id]))
                var newCookie = VueCookies.get('favourites')
                this.favouritesArr = JSON.parse(newCookie)
            }else{
                var favouritesArr = JSON.parse(cookie)
                var inFavourite = false
                for(var favourite of favouritesArr){
                    if(favourite == id){
                        inFavourite = true
                    }
                }
                if(inFavourite){
                    var newFavouriteArr = []
                    for(var favourite of favouritesArr){
                        if(favourite != id){
                            newFavouriteArr.push(favourite)
                        }
                    }
                    VueCookies.set('favourites', JSON.stringify(newFavouriteArr))
                    this.favouritesArr = JSON.parse(VueCookies.get('favourites'))
                }else{
                    favouritesArr.push(id)
                    VueCookies.set('favourites', JSON.stringify(favouritesArr))
                    this.favouritesArr = JSON.parse(VueCookies.get('favourites'))
                }
            }
        }
    },
  }
</script>

<style scoped>
  
</style>
