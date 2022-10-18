<script setup>
    
</script>

<script>
    function initMap() {
    // The location of Uluru
        const coordinateList = [
            { lat: 1.2963, lng: 103.8502 },
            { lat: 1.3631, lng: 103.7674 },
        ];
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: coordinateList[0],
        });
        // The marker, positioned at Uluru
        const markers = coordinateList.map((position,i) => {
            const marker = new google.maps.Marker({
                position: position,
                map: map
            })
        })
    }
  
  window.initMap = initMap;
</script>

<template>
    <div>
        <div id="map"></div>
        <component :is="'script'" type="application/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoEURsqHcC4LHB8F1oYGaZRwf9SaVERLI&callback=initMap&v=weekly"></component>
    </div>
</template>

<script>
    
</script>

<style scoped>
    #map {
        height: 400px;
        width: 100%;
    }
</style>
