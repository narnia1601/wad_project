<template>
    <div class="row">
        <h3 class="mt-3 text-center">Weather Forecast</h3>
        <div class="col" v-for="(weatherData, idx) in weatherDataArray" :key="idx">
            <div class="text-center p-4 icon">
                <p>{{ weatherData.tempInCelsius }}&#x2103;</p>
                <img :src="weatherData.weatherIconUrl" alt="">
                <p>{{ weatherData.weatherCondition }}</p>
                <p>{{ weatherData.date.getDate() }} / {{ weatherData.date.getMonth() }} / {{ weatherData.date.getYear() - 100 + 2000 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['weatherDataArray'],
    }
</script>

<style scoped>
    .icon p{
        margin-bottom: 0px;
    }
    .icon i{
        font-size: 2.5em;
    }
</style>