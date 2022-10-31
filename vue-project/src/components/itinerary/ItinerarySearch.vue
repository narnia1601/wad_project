<script setup>
    import WeatherCard from './WeatherCard.vue'
</script>

<template>
    <div>
        <div class="row">
            <div class="col-1"></div>
            <div class="col">
                <div class="input-group mb-3 col-6" id="searchBar">
                    <input type="text" class="form-control" placeholder="Enter a city" v-model="city" aria-label="city" aria-describedby="city">
                    <span class="input-group-text btn btn-primary" @click="submitCity" id="city">Search</span>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
        <div>
            <div class="card" v-if="weatherDataArray.length > 0">
                <WeatherCard :weatherDataArray="weatherDataArray"></WeatherCard>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: ['searchCity'],
        data() {
            return {
                city: '',
                weatherDataArray: [],
                weatherCondition: ''
            }
        },
        methods: {
            submitCity(){
                if(this.city != ''){
                    var previousDate = 0
                    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=22ddbd5e8bfd7ce3ae8f86037aa1b962'
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
                    .then(res => {
                        var url = 'https://nominatim.openstreetmap.org/search?q=' + this.city + '&format=json'
                        axios.get(url)
                        .then(res => {
                            var lat = parseFloat(parseFloat(res.data[0].lat).toFixed(2))
                            var lng = parseFloat(parseFloat(res.data[0].lon).toFixed(2))
                            this.searchCity(lat, lng, this.city, this.weatherCondition)
                        })
                    })
                }else{
                    this.weatherDataArray = []
                    this.weatherCondition = ''
                    this.searchCity(0, 0, this.city, this.weatherCondition)
                }
            }
        },
    }
</script>

<style scoped>
    #searchBar input{
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        padding-left: 10px;
    }
    #searchBar span{
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
</style>
