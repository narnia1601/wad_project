<script setup>
    
</script>

<template>
    <div id="card" class="card rounded rounded-4 shadow-sm">
        <div>
            <img id="heart" src="../../assets/heart.png"/>
        </div>
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
        <div class="d-flex justify-content-between">
            <h5>Singapore</h5>
            <div>
                <img id="star" class="me-1" src='../../assets/star.png'/>
                <span>4.89 / 5</span>
            </div>
        </div>
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
    #star{
        width: 20px;
        height: 20px;
        transform: translateY(-2px);
    }
    #heart{
        width: 23px;
        height: 23px;
        position: absolute;
        top: 15px;
        right: 15px;
    }
    #card{
        position: relative;
    }
</style>
