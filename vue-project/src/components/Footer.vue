<template>
    <div class="container mt-3">
        <h4 class="text-center">Explore a world of travel with GaiGai</h4>
        <h4 class="text-center"><span class="bg-yellow text-white">Discover new places and experiences</span></h4>
        <hr>
        <img src="../assets/logo.png" class="d-block mx-auto" style="width: 120px" />
        <div class="d-flex justify-content-center m-2">
            <router-link to="/home" class="px-2 text-dark text-decoration-none">Home</router-link>
            |
            <router-link to="/new" class="px-2 text-dark text-decoration-none">Create Itinerary</router-link>
        </div>
    </div>

</template>

<script>

export default {
    name: 'Footer',
}

</script>

