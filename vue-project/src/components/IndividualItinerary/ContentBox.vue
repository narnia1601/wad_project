<template>

    <!-- Content Box -->
    <div class="container mt-3 border rounded-4">
    
        <!-- Content Box title row -->
        <div class="row d-flex justify-content-center">
            <div class="row pt-2 pb-2 d-flex align-items-center">
    
                <!--Location icon -->
                <div class="col-2">
                    <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                </div>
    
                <div class="col-7">
                    <h5 class="text-center">1. Pizzomunno</h5>
                </div>
    
                <!-- Save button -->
                <div class="col-3 d-flex justify-content-end pe-0">
                    <button class="btn save-btn">
                        <svg class="save-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/></svg>
                        Save
                    </button>
                </div>
            </div>
        </div>
    
        <!-- Content Box description and image row -->
        <div class="row">
            <!--Left side of Content Box -->
            <div class="col-8">
                <p>The “Pizzomunno” is a large white rock monolith over 25mt tall, located at beginning of the Scialara Beach, the first beach south of the center of Vieste. Find a spot on one of the beach's free spaces or rent a sun lounge and umbrella at any of the private beach clubs known as lidos.</p>
            </div>
    
            <!-- Image -->
            <div class="col-4 ps-0">
                <img src="../../assets/individualitinerary-pic1.jpg" class="d-block w-100 " alt="itinerary-picture">
            </div>
        </div>
    
        <!-- Content Box tags row -->
        <div class="mb-2 d-flex">
            <!-- Tags -->
            <div class="col-10">
                <span class="badge bg-yellow text-dark me-2 p-2">Beach</span>
                <span class="badge bg-yellow text-dark me-2 p-2">Rocky Mountains</span>
                <span class="badge bg-yellow text-dark me-2 p-2">Sunbathing</span>
                <span class="">...</span>
            </div>
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        name: "ContentBox",
    }
    </script>
    
    <style scoped>
    .location-icon {
        width: 22px;
        fill: #FCE499;
    }
    .save-btn {
        background-color: #FCE499;
        border-radius: 10px;
    }
    .save-icon {
        width: 14px;
    }
    </style>