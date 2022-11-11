<script setup>
import Itineraries from '../Itineraries.vue'
</script>

<template>
    <div class='container-fluid' id="dashboard">
        <h1>{{greet}}<span v-if="firstName != ''">, {{ getUserName }}</span></h1>
        <div id="background"></div>
        <Itineraries></Itineraries>
    </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import axios from 'axios'
export default {
    mounted() {
        this.getUser()
        const cookie = VueCookies.get('id')
        if (cookie == null) {
            this.$router.push('/')
        }
        if (localStorage.getItem('reloaded')) {
            localStorage.removeItem('reloaded')
        } else {
            localStorage.setItem('reloaded', '1')
            location.reload()
        }
    },
    computed: {
        getUserName() {
            return this.firstName
        },
        greet() {
            var myDate = new Date();
            var hrs = myDate.getHours();

            

            if (hrs < 12)
                return 'Good Morning';
            else if (hrs >= 12 && hrs <= 17)
                return 'Good Afternoon';
            else if (hrs >= 17 && hrs <= 24)
                return 'Good Evening';
        }
    },
    data() {
        return {
            firstName: '',
        }
    },
    methods: {
        getUser() {
            const cookie = VueCookies.get('id')
            const url = this.$link + '/user'
            axios.post(url, {
                _id: cookie
            })
                .then(res => {
                    this.firstName = res.data.firstName
                })
        }
    }
}
</script>

<style scoped>
#background {
    background: url('../../assets/individualitinerary-pic1.jpg') no-repeat;
    background-size: cover;
    height: 40vh;
    background-position: center;
}

#dashboard {
    padding: 0%;
}
</style>