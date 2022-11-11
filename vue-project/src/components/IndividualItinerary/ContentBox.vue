<template>
    <div class="container mt-3 border rounded-4">
        <div class="row d-flex justify-content-center">
            <div class="row pt-2 pb-2 d-flex align-items-center">
                <div class="col-2">
                    <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                </div>
    
                <div class="col-7">
                    <h5 class="text-center">{{ data.location }}</h5>
                </div>

                <div class="col-3"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <p>{{ data.description }}</p>
            </div>
            <div class="col-4 ps-0">
                <img :src="'data:image/png;base64,' + data.image" class="d-block w-100 " alt="itinerary-picture">
            </div>
        </div>
        <div class="mb-2 d-flex">
            <div class="col-10">
                <span class="badge bg-yellow text-dark me-2 p-2">{{ data.venue }}</span>
            </div>
        </div>
    </div>
    
</template>
    
<script>
    export default{
        props: ['data'],
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