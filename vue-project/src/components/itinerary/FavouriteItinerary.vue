<template>
    <div class="sticky-top">
        <ul class="list-group">
            <div v-for="(itinerary) in itineraries" :key="itinerary.id">
                <li v-if="favouritesArr.includes(itinerary._id)" class="list-group-item d-flex justify-content-between">
                    <a :href="'/itinerary/' + itinerary.title" class="btn btn-link">{{ itinerary.title }}</a>
                    <img id="heart" @click="toggleFavouritesArr(itinerary._id)" class="ms-2" src="../../assets/heart2.png">
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
    import VueCookies from 'vue-cookies'
    export default{
        props: ['favouritesArr', 'itineraries', 'toggleFavouritesArr'],
    }
</script>

<style scoped>
    #heart{
        width: 20px;
        height: 20px;
        transform: translateY(10px);
    }
</style>