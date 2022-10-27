<template>

    <div class="mt-2 bg-yellow p-1">
        <h3 class="text-center">{{mainHeader}}</h3>
        
        <div class="d-flex justify-content-center align-items-center">
            <h3 class="text-center mb-0 me-3">{{secondHeader}}</h3>
            <button class="border-0 bg-yellow p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#adb5bd" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12H15z"/></svg>
        </button>
            <span>52</span>
        </div>

    </div>

</template>

<script>
export default {
    name: 'IndividualItineraryHeader',
    props: ['mainHeader', 'secondHeader']
}
</script>