<script setup>
import SaveCreate from './SaveCreate.vue'
import AccountCard from './AccountCard.vue'
import VisitedMap from './VisitedMap.vue'



</script>

<template>
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-5 order-sm1'>
                <AccountCard>

                </AccountCard>
            </div>
            <div class='col-7 '>
                    <div class="map">
                        <VisitedMap></VisitedMap>
                    </div>

                    <div >
                        <!-- Saved & Created Itineraries -->
                        <SaveCreate>

                        </SaveCreate>
                    </div>
                
            </div>

        </div>

    </div>

    <div>


    </div>
</template>
