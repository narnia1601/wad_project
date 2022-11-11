<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col col-xs-12 col-lg-6" id="img"></div>
        <div class="col-xs-12 col-lg-6 pt-4 px-4 d-flex align-items-center" id="about-background">
            <div class="row">
                <div class="col-2"></div>
                <div class="col text-center" id="about">
                    <h1 class="card-title">About us</h1>
                    <h4 class="card-text">GaiGai is revolutionising the way itineraries are prepared. Browse through various itineraries and select one that best fits your holiday. If you're feeling adventurous, create your own itineraires and share it with the community!</h4>
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
        background-position: center;
        background-size: cover;
        height: 85vh;
  }
  #about{
    animation: moveToRight 1s;
  }
  #about-background{
    background-image: linear-gradient(rgba(1,125,243,255), rgba(251,43,73,255));
    padding-bottom: 20px;
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
