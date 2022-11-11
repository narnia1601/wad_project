<template>
  <div class="container-fluid mt-3">
    <div>
      <div class="row">
            <div class="col-1"></div>
            <div class="col">
                <div class="input-group mb-3 col-6" id="searchCountryBar">
                    <input type="text" class="form-control" placeholder="Search for a country" v-on:keyup.enter='searchCountry' v-model="searchedCountry" aria-label="country" aria-describedby="country">
                    <span class="input-group-text btn btn-primary" @click="searchCountry" id="country">Search</span>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
    <div v-if="errorMsg !== ''">
      <div class="alert alert-danger text-center" role="alert">
        {{errorMsg}}
      </div>
    </div>
      <div class="card" v-if="weatherDataArray.length > 0">
          <WeatherCard :weatherDataArray="weatherDataArray"></WeatherCard>
      </div>

    <div class="mt-4">
      <div class="row">
          <div class="col-md-4 mb-3 order-md-2">
              <FavouriteItinerary :favouritesArr="favouritesArr" :toggleFavouritesArr="toggleFavouritesArr" :itineraries="itineraryArr"></FavouriteItinerary>
          </div>
          <div v-if="itineraryArr.length == 0" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div v-else-if="whetherSearchedCountry" class="col-md-8 order-md-1">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4" :key="searchedIdx" v-for="(searchedItinerary, searchedIdx) in searchedCountryItineraryArr">
                <ItineraryCard :toggleFavouritesArr="toggleFavouritesArr" :href="`/itinerary/${searchedItinerary.title}`" :favouritesArr="favouritesArr" :imageArr="imageArr[searchedIdx]" :name="'carouselCaptions' + searchedIdx" :data="searchedItinerary"></ItineraryCard>
              </div>
            </div>
          </div>
          <div v-else class="col-md-8 order-md-1">

            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4" :key="idx" v-for="(itinerary, idx) in itineraryArr">
                <ItineraryCard :imageArr="imageArr[idx]" :href="`/itinerary/${itinerary.title}`" :favouritesArr="favouritesArr" :toggleFavouritesArr="toggleFavouritesArr" :name="'carouselCaptions' + idx" :data="itinerary"></ItineraryCard>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ItineraryCard from './itinerary/ItineraryCard.vue'
  import FavouriteItinerary from './itinerary/FavouriteItinerary.vue'
  import WeatherCard from './itinerary/WeatherCard.vue'
  import axios from 'axios'
  import VueCookies from 'vue-cookies'
  export default{
    components: {
      ItineraryCard,
      FavouriteItinerary,
      WeatherCard
    },
    data(){
        return {
            itineraryArr: [],
            favouritesArr: [],
            lat: 0.0,
            lng: 0.0,
            hasSearched: false,
            weather: '',
            imageArr: [],
            searchedCountry: '',
            whetherSearchedCountry: false,
            searchedCountryItineraryArr: [],
            errorMsg: '',
            weatherDataArray: [],
            weatherCondition: ''
        }
    },
    mounted() {
        this.getItineraries()
        this.favouritesArr = JSON.parse(VueCookies.get('favourites'))
    },
    methods: {
        getItineraries(){
          var url = this.$link + '/itineraries'
          axios.post(url)
          .then(res => {
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
        },
        searchCountry() {
          this.getCountryWeather()
          this.whetherSearchedCountry = true
          let newItineraryArr = []

          for (let i=0; i<this.itineraryArr.length; i++) {

            let itinerary = this.itineraryArr[i]
            let itineraryCountry = itinerary.country

            if (itineraryCountry == this.searchedCountry) {
              newItineraryArr.push(itinerary)
              this.getImages(newItineraryArr)
            }
          }

          if (newItineraryArr.length == 0) {
            this.errorMsg = `Sorry! No itineraries from ${this.searchedCountry} found.`
          }
          else {
            this.errorMsg = ""
          }

          this.searchedCountryItineraryArr = newItineraryArr

        },
        getCountryWeather(){
          if(this.searchedCountry != ''){
              var previousDate = 0
              var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + this.searchedCountry + '&appid=22ddbd5e8bfd7ce3ae8f86037aa1b962'
              this.weatherDataArray = []
              axios.get(url)
              .then(res => {
                  for(let i=0;i<res.data.list.length;i++){
                      var date = new Date(res.data.list[i].dt_txt.split(' ')[0])
                      if(date.getDate() > previousDate){
                          var weatherCondition = res.data.list[i].weather[0].description
                          var weatherIcon = res.data.list[i].weather[0].icon.substring(0,2)
                          var weatherIconUrl = 'http://openweathermap.org/img/wn/' + weatherIcon + 'd' + '@2x.png'
                          var temp = res.data.list[i].main.temp
                          var tempInCelsius = parseInt(temp - 273.15)
                          var weatherDataObj = {
                              date: date,
                              weatherCondition: weatherCondition,
                              tempInCelsius: tempInCelsius,
                              weatherIconUrl: weatherIconUrl
                          }
                          this.weatherDataArray.push(weatherDataObj)
                          previousDate = date.getDate()
                      }
                  }
                  this.weatherCondition = this.weatherDataArray[0].weatherCondition
              })
          }
        }
    },
  }
</script>

<style scoped>
    #searchCountryBar input{
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        padding-left: 10px;
    }
    #searchCountryBar span{
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
</style>
