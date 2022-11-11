<template>
    <div class="container">
        <div class="alert alert-success mt-3" v-if="itinerarySubmitted">Itinerary Created!</div>
        <div v-if="errorMsg !== ''" class="alert alert-warning mt-3">
            {{errorMsg}}
        </div>

        <div class="row">
            <div class="col-12 col-sm-8">
                <div class="mt-3">
                    <label for="name" class="form-label">Name of itinerary</label>
                    <input type="text" id="name" class="form-control" v-model="itineraryName">
                </div>
            </div>
            <div class="col-12 col-sm-4">
                <div class="mt-3">
                    <label for="days" class="form-label">Number of days</label>
                    <input type="number" id="days" class="form-control" @keyup="changeItineraryDays(itineraryDays)" v-model="itineraryDays">
                </div>
            </div>
        </div>
        <div class="mt-3 mb-3">
            <div v-for="rowIdx in Math.ceil(itineraryDaysArr.length / 7)" :key="rowIdx.id">
                <div>
                    <h5>Week {{ rowIdx }}</h5>
                </div>

                <span v-for="idx in itineraryDaysArr.slice(7 * (rowIdx - 1), 7 * rowIdx)" :key="idx.id" @click="selectDay(idx)">
                    <button v-if="selectedDay == idx" class="btn btn-primary me-2 mb-2">Day {{ idx }}</button>
                    <button v-else class="btn btn-outline-primary me-2 mb-2">Day {{ idx }}</button>
                </span>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-12 col-md-8 order-sm-last order-md-first order-last">
                <div v-if="newAttraction">
                    <div class="mt-3">
                        <label for="location" class="form-label">Location</label>
                        <input @change="locationShowUserFunc" type="text" id="location" v-model="location" class="form-control">
                        <div v-if="locationShowUser !== ''" class="form-text">Do you mean: {{locationShowUser}}?</div>
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
            <div class="col-sm-12 col-12 col-md-4 order-sm-first order-md-last order-first mt-4">
                <ul v-if="itineraryArr != null || itineraryArr[selectedDay - 1].length > 0" class="list-group">
                    <li class="list-group-item" v-for="itinerary in itineraryArr[selectedDay - 1]" :key="itinerary.id">
                        <div class="row">
                            <div class="col-10 text-center">
                                <h5>{{ itinerary.location }}</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-end">
                                <svg id="delete" @click="deleteAttraction(itinerary.location)" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p v-if="itinerary.description.length > 100">{{ itinerary.description.substring(0,100) + '...' }}</p>
                                <p v-else>{{ itinerary.description }}</p>
                            </div>
                            <div class="col">
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
                itinerarySubmitted: false,
                errorMsg: '',
                locationShowUser: '',
                country: '',
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
                if (newDays < this.itineraryArr.length){

                    let daysDifference = this.itineraryArr.length - newDays
                    this.itineraryArr.splice(newDays, daysDifference)
                    this.itineraryDaysArr.splice(newDays, daysDifference)
                }
                else if (newDays > this.itineraryArr.length){

                    let currentItineraryArrLength = this.itineraryArr.length

                    for (let i=currentItineraryArrLength+1; i<=newDays; i++) {
                        this.itineraryArr.push([])
                        this.itineraryDaysArr.push(i)
                    }
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
                if (this.itineraryName === '') {
                    this.errorMsg = "Please fill in the itinerary name."
                    this.scrollFunction()
                }

                else if (this.description === '') {
                    this.errorMsg = "Please fill in a description of the attraction."
                    this.scrollFunction()
                }

                else if (this.image === '') {
                    this.errorMsg = "Please add at least 1 image of the attraction."
                    this.scrollFunction()
                }
                else {
                    var lat = 0
                    var lng = 0
                    var venue = this.isIndoor ? 'indoors' : 'outdoors'
                    var url = 'https://nominatim.openstreetmap.org/search?q=' + this.location + '&format=json'
                    var country = ''
                    axios.get(url)
                    .then(res => {    
                        lat = parseFloat(parseFloat(res.data[0].lat).toFixed(2))
                        lng = parseFloat(parseFloat(res.data[0].lon).toFixed(2))
                        let locationName = res.data[0].display_name
                        let locationNameParts = locationName.split(", ")
                        let country = locationNameParts[locationNameParts.length - 1]
                        this.country = country
                    })
                    .then(res => {
                        this.errorMsg = ""
                        this.locationShowUser = ""
    
                        var idx = this.selectedDay - 1
    
                        this.itineraryArr[idx].push({
                            location: this.location,
                            description: this.description,
                            image: this.image,
                            lat: lat,
                            lng: lng,
                            venue: venue,
                        })
                        this.newAttraction = false
                        this.isIndoor = true
                        this.location = ''
                        this.description = ''
                        document.getElementById('image').value = ''
                    })
                    .catch(error => {
                        this.locationShowUser = ""
                        this.errorMsg = "No location found."
                        this.scrollFunction()
                    })

                }
            },
            submitItinerary(){
                var itineraryArrFinal = []
                let whetherAnyDaysNoAttraction = false

                this.itineraryArr.map((dayItinerary, index) => {
                    if(dayItinerary.length == 0){
                        whetherAnyDaysNoAttraction = true
                        this.errorMsg = `Day ${index + 1} has no attractions added.`
                        this.scrollFunction()
                    } 
                    else {
                        itineraryArrFinal.push(dayItinerary)
                    }
                })

                if (!whetherAnyDaysNoAttraction) {
                    var days = itineraryArrFinal.length
                    let body = { 
                        'title': this.itineraryName,
                        'country': this.country,
                        'days': days,
                        "files": itineraryArrFinal
                    }
                    var url = this.$link + '/upload'
                    axios.post(url, {
                        body: body,
                    })
                    .then(res => {
                        this.selectedDay = 1
                        this.itineraryDays = 1
                        this.itineraryDaysArr = [1]
                        this.itinerarySubmitted = true
                        this.newAttraction = false
                        this.itineraryName = ''
                        this.itineraryArr = [[]]
                        setTimeout(() => {
                            this.itinerarySubmitted = false
                        }, 5000);
                    })
                }
            },
            scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
            },
            locationShowUserFunc() {
                let url2 = 'https://nominatim.openstreetmap.org/search?q=' + this.location + '&format=json'
                    axios.get(url2)
                    .then(res => {
                        this.errorMsg = ""

                        this.locationShowUser = res.data[0].display_name
                        let locationName = res.data[0].display_name
                        let locationNameParts = locationName.split(", ")
                        let country = locationNameParts[locationNameParts.length - 1]
                    })
                    .catch(error => {
                        this.locationShowUser = ""
                        this.errorMsg = "No location found."
                        this.scrollFunction()
                    })
            },
            deleteAttraction(locationToDelete) {
                let dayItineraryArr = this.itineraryArr[this.selectedDay - 1]

                for (let i=0; i<dayItineraryArr.length; i++) {
                    let dayItinerary = dayItineraryArr[i]

                    if (dayItinerary.location == locationToDelete) {
                        dayItineraryArr.splice(i, 1)
                    }
                }
                this.itineraryArr[this.selectedDay - 1] = dayItineraryArr
            }
        },
    }
</script>

<style scoped>
svg{
    cursor: pointer;
}
    #img{
        width: 100%
    }
    #delete:hover{
        cursor: pointer
    }
</style>