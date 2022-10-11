<script setup>
</script>

<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-6" id="img"></div>
        <div class="col-6 pt-4 px-4 d-flex align-items-center">
            <div class="row">
                <div class="col-2"></div>
                <div class="col" id="about">
                    <div class="card shadow p-3 mb-5 bg-body rounded rounded-4 text-center">
                        <div class="card-body">
                            <h1 class="card-title">About us</h1>
                            <h4 class="card-text">GaiGai is revolutionising the way itineraries are prepared. Browse through various itineraries and select one that best fits your holiday. If you're feeling adventurous, create your own itineraires and share it with the community!</h4>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
  #img{
        background: url('../assets/holiday.jpeg');
        background-size: cover;
        height: 85vh;
  }
  #about{
    animation: moveToRight 1s;
  }
  @keyframes moveToRight {
    0% {
        transform: translateX(-20px);
    }
    100% {
        transform: translateX(0px);
    }
  }
</style>
