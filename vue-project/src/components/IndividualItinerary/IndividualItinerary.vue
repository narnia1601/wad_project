<script setup>
    import IndividualItineraryHeader from './IndividualItineraryHeader.vue'
    import ContentBox from './ContentBox.vue'
    import Map from '../itinerary/Map.vue'
    import Comment from './Comment.vue'
</script>

<template>
    
    <div class="container-fluid p-0">

        <div v-if="itineraryArr.length == 0" class="mt-3 d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-else>
            <!-- Header -->
            <IndividualItineraryHeader :mainHeader="title" :secondHeader="days != null ? (days + (days > 1 ? ' days' : ' day')) : ''" />
    
            <!-- Days scroll bar -->
            <div class="container mt-3">
                <div v-for="rowIdx in Math.ceil(itineraryDaysArr.length / 7)" :key="rowIdx.id">
    
                    <div>
                        <h5>Week {{ rowIdx }}</h5>
                    </div>
    
                    <span v-for="idx in itineraryDaysArr.slice(7 * (rowIdx - 1), 7 * rowIdx)" :key="idx.id" @click="selectDay(idx - 1)">
                        <button v-if="selectedDay == idx - 1" class="btn btn-primary me-2 mb-2">Day {{ idx }}</button>
                        <button v-else class="btn btn-outline-primary me-2 mb-2">Day {{ idx }}</button>
                    </span>
                    <!-- <span>
                        <h5 style="display: inline;">Week {{ rowIdx }}</h5>
                    </span> -->
                    <hr v-if="rowIdx > 1">
                </div>
            </div>
    
            <hr class="mt-2 mb-2">
    
            <div class="container-fluid">
                <div class="row">
                    <!-- Content Boxes col -->
                    <div class="col-7 pe-0">
                        <div id="content">
                            <ContentBox :class="'content-' + data['location'] == selectedContent ? 'active' : ''" :id="'content-' + data['location']" v-for="data in itineraryArr[selectedDay]" :data="data" :key="data.id"></ContentBox>
                        </div>
                        <div class="container mt-3 pt-3 p-0">
                            <div class="input-group">
                                <input type="text" class="form-control" v-model="comment" placeholder="Post a comment">
                                <button @click="submitComment" class="btn btn-primary">Post</button>
                            </div>
                            <div class="text-danger" v-if="error != ''">{{ error }}</div>
                            <Comment class="mb-3 mt-3" v-for="comment in comments" :key="comment.id" :firstName="comment.firstName" :comment="comment.comment"></Comment>
                        </div>
                    </div>
    
                    <!-- Map col -->
                    <div class="col-5 mt-3">
                        <!-- UN-COMMENT WHEN READY TO SUBMIT APP -->
                        <!-- <Map class="map" :markerClicked="markerClicked" :coordinatesArr="coordinatesArr" :totalItineraryArr="totalItineraryArr" /> -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    export default {
        mounted() {
            this.index = this.$route.fullPath.split('/')[2]
            var url = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app/itineraries'
            axios.get(url)
            .then(res => {
                console.log(res.data)
                res.data.map(itineraries => {
                    var titleString = ''
                    var titleArr = itineraries.title.split(' ')
                    titleArr.map(text => {
                        titleString += text
                        if(titleArr.indexOf(text) != titleArr.length - 1){
                            titleString += '%20'
                        }
                    })
                    if(this.index == titleString){
                        this.title = itineraries.title
                        this.days = itineraries.days
                        for(var i=0; i<this.days; i++){
                            this.itineraryDaysArr.push(i + 1)
                        }
                        this.itineraryArr = itineraries.attractions
                        this.itineraryArr.map(data => {
                            data.map(location => {
                                this.coordinatesArr.push({
                                    lat: location.lat,
                                    lng: location.lng
                                })
                                this.totalItineraryArr.push(location.location)
                            })
                        })
                        this.comments = itineraries.comments
                    }
                })
            })
            this.getUser()
        },
        data() {
            return {
                index: null,
                title: '',
                days: null,
                itineraryDaysArr: [],
                selectedDay: 0,
                itineraryArr: [],
                coordinatesArr: [],
                selectedContent: null,
                firstName: '',
                comment: '',
                comments: [],
                error: '',
                totalItineraryArr: []
            }
        },
        methods: {
            submitComment(){
                if(this.comment != ''){
                    this.comments.unshift({
                        firstName: this.firstName,
                        comment: this.comment
                    })
                    var pathArr = this.$route.fullPath.split('/')[2].split('%20')
                    var pathStr = ''
                    pathArr.map(path => {
                        pathStr += path
                    })
                    var url = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app/submitComment/' + pathStr
                    axios.post(url, {
                        firstName: this.firstName,
                        comment: this.comment
                    })
                    .then(res => {
                        this.comment = ''
                    })
                }else{
                    this.error = 'Add a comment'
                }
            },
            selectDay(dayNum){
                this.selectedDay = dayNum
            },
            markerClicked(location){
                document.getElementById('content-' + location).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
                this.selectedContent = 'content-' + location
            },
            getUser(){
                const cookie = VueCookies.get('id')
                const url = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app/user'
                axios.get(url, {
                    params: {
                        _id: cookie
                    }
                })
                .then(res => {
                    this.firstName = res.data.firstName
                })
            }
        },
    }
</script>

<style scoped>
hr {
    color: #6c757d;
}
.map {
    position: sticky;
    top: 0;
}
/* #content{
    max-height: 70vh;
    overflow: scroll;
} */
.active{
    transform: translate(-10px, -10px);
    box-shadow: 10px 10px rgba(0, 0, 0, 0.7);
    transition: 0.5s;
}
</style>
