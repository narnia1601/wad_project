
<template>
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="Attraction-tab" data-bs-toggle="tab" data-bs-target="#Attraction" type="button" role="tab" aria-controls="Attraction" aria-selected="true">Attraction</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="Food-tab" data-bs-toggle="tab" data-bs-target="#Food" type="button" role="tab" aria-controls="Food" aria-selected="false">Food</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="Stay-tab" data-bs-toggle="tab" data-bs-target="#Stay" type="button" role="tab" aria-controls="Stay" aria-selected="false">Stay</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="Attraction" role="tabpanel" aria-labelledby="Attraction-tab"><br><formtemplate></formtemplate></div>
            <div class="tab-pane fade" id="Food" role="tabpanel" aria-labelledby="Food-tab"><br><formtemplate></formtemplate></div>
            <div class="tab-pane fade" id="Stay" role="tabpanel" aria-labelledby="Stay-tab"><br><formtemplate></formtemplate></div>
        </div>
</template>
    
    <script>

    import formtemplate from './formtemplate.vue';

        export default {
            name:'typenav',
            components: {
                formtemplate
            }
            
        } 
    </script>

    <style scoped>
    .uploading-image{
        display:flex;
    }
    </style>