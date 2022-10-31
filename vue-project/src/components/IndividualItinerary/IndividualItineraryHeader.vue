<template>
    <div class="mt-2 bg-yellow p-1">
        <h3 class="text-center">{{mainHeader}}</h3>
        <h3 class="text-center mb-0">{{secondHeader}}</h3>
    </div>

</template>

<script>
export default {
    name: 'IndividualItineraryHeader',
    props: ['mainHeader', 'secondHeader']
}
</script>