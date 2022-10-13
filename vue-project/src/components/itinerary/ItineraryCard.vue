<script setup>
    
</script>

<template>
   <div class="card bg-dark rounded rounded-4" style="width: 18rem">
        <div :id="name" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" :data-bs-target="'#' + name" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" :data-bs-target="'#' + name" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" :data-bs-target="'#' + name" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../assets/africa.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../../assets/asia.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../../assets/australia.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="'#' + name" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#' + name" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
    <div class="mt-2">
        <h5>Singapore</h5>
        <p class="text-muted">5 locations</p>
    </div>
</template>

<script>
    export default{
        props: ['name'],
    }
</script>

<style scoped>
    h5{
        margin-bottom: 0px;
    }
</style>
