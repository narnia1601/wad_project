<template>
    <div class="container-fluid p-0">

        <!-- Header -->
        <IndividualItineraryHeader mainHeader="A Taste Of Italy" secondHeader="10 days" />

        <!-- Days scroll bar -->
        <DayNav numDays="10" />

        <hr class="mt-2 mb-2">

        <!-- Type (Attraction / Food / Stay) navbar -->
        <TypeNav />

        <div class="container-fluid">
            <div class="row">
                <!-- Content Boxes col -->
                <div class="col-7 pe-0">
                    <!-- Content Boxes -->
                    <ContentBox />
                    <ContentBox />
                    <ContentBox />
                </div>

                <!-- Map col -->
                <div class="col-5 mt-3">
                    <Map class="map" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import IndividualItineraryHeader from './IndividualItineraryHeader.vue'
import DayNav from './DayNav.vue'
import TypeNav from './TypeNav.vue'
import ContentBox from './ContentBox.vue'
import Map from '../itinerary/Map.vue'
export default {
    name: 'IndividualItinerary',
    components: {
        IndividualItineraryHeader,
        DayNav,
        TypeNav,
        ContentBox,
        Map
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
</style>