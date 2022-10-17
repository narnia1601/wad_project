<template>
    <div class="container mt-3">
        <!-- The 2 lines of text -->
        <h4 class="text-center">Explore a world of travel with GaiGai</h4>
        <h4 class="text-center"><span class="bg-yellow text-white">Discover new places and experiences</span></h4>
        
        <!-- Horizontal line -->
        <hr>

        <!-- Logo -->
        <img src="../assets/logo.png" class="d-block mx-auto" style="width: 120px" />

        <!-- Links -->
        <div class="d-flex justify-content-center m-2">
            <router-link to="#" class="px-2 text-dark text-decoration-none">Home</router-link>
            |
            <router-link to="#" class="px-2 text-dark text-decoration-none">Community</router-link>
            |
            <router-link to="#" class="px-2 text-dark text-decoration-none">About</router-link>
        </div>
    </div>

</template>

<script>

export default {
    name: 'Footer',
}

</script>

