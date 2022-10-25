<template>
    <div id='app' class="container-fluid p-0">

        <!-- Header -->
        <TemplateHeader mainHeader="Create an Itinerary" secondHeader="Number of Days: "></TemplateHeader>

        <!-- Type of itinerary -->
        <typenav></typenav>

        <formtemplate></formtemplate>

    </div>
</template>

<script>
import TemplateHeader from './TemplateHeader.vue'
import typenav from './typenav.vue'
// import nametemplate from './nametemplate.vue'
import formtemplate from './formtemplate.vue'

export default {
    name: 'ItineraryTemplate',
    components: {
        TemplateHeader,
        // nametemplate,
        typenav,
        formtemplate
    }
}
</script>

<style scoped>
hr {
    color: #6c757d;
}

</style>
