<template>
    <div id="card-link">
        <div id="card" class="card rounded rounded-4 shadow-sm">
            <div :id="name" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="(image, idx) in imageArr" :class="idx == 0 ? 'carousel-item active' : 'carousel-item'" :key="image.id">
                        <a :href="href">
                            <img :src="'data:image/png;base64,' + imageArr[idx]" class="d-block w-100" alt="">
                        </a>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" :data-bs-target="'#' + name" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" :data-bs-target="'#' + name" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        <div class="mt-2">
            <div class="row" id="card-info">
                <h5 class="col-10 text-start">
                    <a :href="href" style="text-decoration: none">{{ data.title }}</a>
                </h5>
                <div class="col-2 text-end">
                    <img id="heart" @click='toggleFavouritesArr(data._id)' v-if="favouritesArr == null || !favouritesArr.includes(data._id)" class="ms-2" src="../../assets/heart.png">
                    <img id="heart" @click='toggleFavouritesArr(data._id)' v-else class="ms-2" src="../../assets/heart2.png">
                </div>
            </div>
            <p class="text-muted" v-if="getLocations == 1">{{ getLocations }} location</p>
            <p class="text-muted" v-else>{{ getLocations }} locations</p>
        </div>
    </div>
</template>

<script>
    import VueCookies from 'vue-cookies'
    export default{
        props: ['name', 'data', 'favouritesArr', 'toggleFavouritesArr', 'imageArr', 'href'],
        computed: {
            getLocations(){
                var locations = 0
                this.data.attractions.map(attraction => {
                    attraction.map(data => {
                        locations += 1
                    })
                })
                return locations
            }
        },
    }
</script>

<style scoped>
    h5{
        margin-bottom: 0px;
    }
    #star{
        width: 20px;
        height: 20px;
        transform: translateY(-2px);
    }
    #heart{
        width: 20px;
        height: 20px;
        transform: translateY(-2px);
    }
    #card-link{
        text-decoration: none;
        color: black;
    }
</style>
