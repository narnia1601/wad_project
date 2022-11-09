<template>
  <div class="container-fluid mt-3">
    <!-- <ItinerarySearch :searchCity="searchCity"></ItinerarySearch> -->

    <!-- Search by country search bar -->
    <div>
      <div class="row">
            <div class="col-1"></div>
            <div class="col">
                <div class="input-group mb-3 col-6" id="searchCountryBar">
                    <input type="text" class="form-control" placeholder="Search for a country" v-model="searchedCountry" aria-label="country" aria-describedby="country">
                    <span class="input-group-text btn btn-primary" @click="searchCountry" id="country">Search</span>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>

    <!-- For error msg -->
    <div v-if="errorMsg !== ''" class="row">
      <div class="alert alert-danger text-center" role="alert">
        {{errorMsg}}
      </div>
    </div>

    <!-- Display weather data -->
    <div class="row">
      <div class="card" v-if="weatherDataArray.length > 0">
          <WeatherCard :weatherDataArray="weatherDataArray"></WeatherCard>
      </div>
    </div>

    <div class="mt-4">
      <div class="row">
          <div v-if="itineraryArr.length == 0" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div v-else-if="whetherSearchedCountry" class="col-lg-4 col-md-6 mb-4" :key="searchedIdx" v-for="(searchedItinerary, searchedIdx) in searchedCountryItineraryArr">
            <ItineraryCard :imageArr="imageArr[searchedIdx]" :link="searchedItinerary.title" :name="'carouselCaptions' + searchedIdx" :data="searchedItinerary"></ItineraryCard>
          </div>

          <div v-else class="col-lg-4 col-md-6 mb-4" :key="idx" v-for="(itinerary, idx) in itineraryArr">
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
  import ItinerarySearch from './itinerary/ItinerarySearch.vue'
  import ItineraryCard from './itinerary/ItineraryCard.vue'
  import FavouriteItinerary from './itinerary/FavouriteItinerary.vue'
  import WeatherCard from './itinerary/WeatherCard.vue'
  import axios from 'axios'
  import VueCookies from 'vue-cookies'
  export default{
    components: {
      ItinerarySearch,
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
          // var url = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app/itineraries'
          var url = 'http://localhost:8080/itineraries/'
          axios.get(url)
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
        searchCity(lat, lng, city, weatherCondition){
          var outdoorArr = ['shower rain','rain','thunderstorm','snow','mist', 'overcast clouds', 'light rain', 'moderate rain']
          if(city == ''){
            this.getItineraries()
          }else if(this.hasSearched){
            // var url = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app/itineraries'
            var url = 'http://localhost:8080/itineraries/'
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
        },
        searchCountry() {

          this.getCountryWeather()

          this.whetherSearchedCountry = true

          // input: this.searchedCountry
          let newItineraryArr = []

          for (let i=0; i<this.itineraryArr.length; i++) {

            let itinerary = this.itineraryArr[i]
            let itineraryCountry = itinerary.country

            if (itineraryCountry == this.searchedCountry) {
              newItineraryArr.push(itinerary)
              this.getImages(newItineraryArr)
              console.log(this.imageArr)
              console.log(newItineraryArr)
            }
          }

          if (newItineraryArr.length == 0) {
            this.errorMsg = `Sorry! No itineraries from ${this.searchedCountry} found.`
          }
          else {
            this.errorMsg = ""
          }

          this.searchedCountryItineraryArr = newItineraryArr

          // console.log(this.itineraryArr)

          // this.searchedCountryItineraryArr = this.itineraryArr.filter((itinerary) => {
          //   let itineraryCountry = itinerary.country
          //   return itineraryCountry == this.searchedCountry
          // })

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
