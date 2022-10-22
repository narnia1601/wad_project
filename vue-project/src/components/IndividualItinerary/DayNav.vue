<template>

    <!-- <div class="swiper-container mx-auto"> -->
    
    <div>
        <div class="d-flex justify-content-center">
            <button v-for="day in Number(numDays)" :key="day" class="btn btn-yellow m-2 mb-0">Day {{day}}</button>
        </div>
    
        <!-- <div id="carouselDayControls" class="carousel slide mt-2" data-bs-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-4 d-flex justify-content-end p-0">
                            <button class="btn btn-yellow">Day 1</button>
                        </div>
                        <div class="col-4 d-flex justify-content-center p-0">
                            <button class="btn btn-yellow">Day 2</button>
                        </div>
                        <div class="col-4 d-flex justify-content-start p-0">
                            <button class="btn btn-yellow">Day 3</button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-4 d-flex justify-content-end p-0">
                            <button class="btn btn-yellow">Day 4</button>
                        </div>
                        <div class="col-4 d-flex justify-content-center p-0">
                            <button class="btn btn-yellow">Day 5</button>
                        </div>
                        <div class="col-4 d-flex justify-content-start p-0">
                            <button class="btn btn-yellow">Day 6</button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-4 d-flex justify-content-end p-0">
                            <button class="btn btn-yellow">Day 7</button>
                        </div>
                        <div class="col-4 d-flex justify-content-center p-0">
                            <button class="btn btn-yellow">Day 8</button>
                        </div>
                        <div class="col-4 d-flex justify-content-start p-0">
                            <button class="btn btn-yellow">Day 9</button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselDayControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            
            <button class="carousel-control-next" type="button" data-bs-target="#carouselDayControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> -->
    </div>
    
    </template>
    
    <script>
    export default {
        name: 'DayNav',
        props: ['numDays']
    }
    </script>
    
    <style scoped>
    /* .swiper-container {
        width: 30%;
    } */
    .btn-yellow {
        background-color: #FCE499;
    }
    .carousel-control-next-icon {
        background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"%3E%3Cpath fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"%2F%3E%3C%2Fsvg%3E')
    }
    .carousel-control-prev-icon {
        background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"%3E%3Cpath fill="currentColor" d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0z"%2F%3E%3C%2Fsvg%3E')
    }
    </style>