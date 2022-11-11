<template>
    <div>
        <div class="d-flex justify-content-center">
            <button v-for="day in Number(numDays)" :key="day" class="btn btn-yellow m-2 mb-0">Day {{day}}</button>
        </div>
    </div>
    
</template>
    
<script>
    export default {
        name: 'DayNav',
        props: ['numDays']
    }
</script>
    
<style scoped>
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