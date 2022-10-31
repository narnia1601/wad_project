<template>
    <div class="container">
        <div class="alert alert-success mt-3" v-if="itinerarySubmitted">Itinerary Created!</div>
        <div class="row">
            <div class="col-8">
                <div class="mt-3">
                    <label for="name" class="form-label">Name of itinerary</label>
                    <input type="text" id="name" class="form-control" v-model="itineraryName">
                </div>
            </div>
            <div class="col-4">
                <div class="mt-3">
                    <label for="days" class="form-label">Number of days</label>
                    <input type="number" id="days" class="form-control" @change="changeItineraryDays(itineraryDays)" v-model="itineraryDays">
                </div>
            </div>
        </div>
        <div class="mt-3 mb-3">
            <div v-for="rowIdx in Math.ceil(itineraryDaysArr.length / 7)" :key="rowIdx.id">
                <span v-for="idx in itineraryDaysArr.slice(7 * (rowIdx - 1), 7 * rowIdx)" :key="idx.id" @click="selectDay(idx)">
                    <button v-if="selectedDay == idx" class="btn btn-info me-2 mb-2">Day {{ idx }}</button>
                    <button v-else class="btn btn-outline-info me-2 mb-2">Day {{ idx }}</button>
                </span>
                <span>
                    <h5 style="display: inline;">Week {{ rowIdx }}</h5>
                </span>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div v-if="newAttraction">
                    <div class="mt-3">
                        <label for="location" class="form-label">Location</label>
                        <input type="text" id="location" v-model="location" class="form-control">
                    </div>
                    <div class="mt-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea id="description" class="form-control" v-model="description" rows="3"></textarea>
                    </div>
                    <div class="mt-3">
                        <label for="image" class="form-label">Add Image</label>
                        <input id="image" class="form-control" @change="selectFile" type="file">
                    </div>
                    <div class="mt-3 mb-4">
                        <button @click="toggleIsIndoor" :class="isIndoor ? 'btn btn-outline-primary me-2' : 'btn btn-primary me-2'">Outdoors</button>
                        <button @click="toggleIsIndoor" :class="!isIndoor ? 'btn btn-outline-primary' : 'btn btn-primary'">Indoors</button>
                    </div>
                    <div class="btn btn-primary mt-4 w-100" @click="submitAttraction">Add attraction</div>
                </div>
                <button class="btn btn-primary w-100 mt-4" v-if="!newAttraction" @click="addAttraction">Add new Attraction</button>
                <button class="btn btn-primary w-100 mt-4" v-if="!newAttraction && this.itineraryArr[0].length > 0" @click="submitItinerary">Confirm Itinerary</button>
            </div>
            <div class="col-4 mt-4">
                <ul v-if="itineraryArr != null || itineraryArr[selectedDay - 1].length > 0" class="list-group">
                    <li class="list-group-item" v-for="itinerary in itineraryArr[selectedDay - 1]" :key="itinerary.id">
                        <div class="row">
                            <div class="col text-center">
                                <h5>{{ itinerary.location }}</h5>
                                <p v-if="itinerary.description.length > 100">{{ itinerary.description.substring(1,100) + '...' }}</p>
                                <p v-else>{{ itinerary.description }}</p>
                            </div>
                            <div class="col text-center w-50">
                                <img id="img" :src="itinerary.image" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    export default{
        data() {
            return {
                itineraryName: '',
                itineraryDays: 1,
                itineraryDaysArr: [1],
                selectedDay: 1,
                newAttraction: false,
                itineraryArr: [[]],
                location: '',
                description: '',
                image: '',
                isIndoor: true,
                itinerarySubmitted: false
            }
        },
        mounted() {
            const cookie = VueCookies.get('id')
            if(cookie == null){
                this.$router.push('/')
            }
        },
        methods: {
            toggleIsIndoor(){
                this.isIndoor = !this.isIndoor
            },
            selectDay(dayNum){
                this.selectedDay = dayNum
            },
            addAttraction(){
                this.newAttraction = true
            },
            changeItineraryDays(newDays){
                if(newDays < this.itineraryArr.length){
                    this.itineraryArr.pop()
                    this.itineraryDaysArr.pop()
                }else if(newDays > this.itineraryArr.length){
                    this.itineraryArr.push([])
                    this.itineraryDaysArr.push(newDays)
                }
            },
            selectFile(e){
                const image = e.target.files[0]
                const reader = new FileReader()
                reader.readAsDataURL(image)
                reader.onload = e => {
                    this.image = e.target.result
                }
            },
            submitAttraction(){
                var lat = 0
                var lng = 0
                var venue = this.isIndoor ? 'indoors' : 'outdoors'
                var url = 'https://nominatim.openstreetmap.org/search?q=' + this.location + '&format=json'
                axios.get(url)
                .then(res => {
                    lat = parseFloat(parseFloat(res.data[0].lat).toFixed(2))
                    lng = parseFloat(parseFloat(res.data[0].lon).toFixed(2))
                })
                .then(res => {
                    var idx = this.selectedDay - 1
                    this.itineraryArr[idx].push({
                        location: this.location,
                        description: this.description,
                        image: this.image,
                        lat: lat,
                        lng: lng,
                        venue: venue
                    })
                    this.newAttraction = false
                    this.isIndoor = true
                    this.location = ''
                    this.description = ''
                    document.getElementById('image').value = ''
                })
            },
            submitItinerary(){
                var itineraryArrFinal = []
                this.itineraryArr.map(dayItinerary => {
                    if(dayItinerary.length > 0){
                        itineraryArrFinal.push(dayItinerary)
                    }
                })
                var days = itineraryArrFinal.length
                let body = { 
                    'title': this.itineraryName,
                    'days': days,
                    "files": itineraryArrFinal
                }
                var url = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app/upload'
                axios.post(url, {
                    body: body,
                })
                .then(res => {
                    console.log(res)
                    this.itinerarySubmitted = true
                    this.newAttraction = false
                    this.itineraryName = ''
                    this.itineraryArr = [[]]
                    setTimeout(() => {
                        this.itinerarySubmitted = false
                    }, 3000);
                })
            }
        },
    }
</script>

<style scoped>
    #img{
        width: 100%
    }
</style>