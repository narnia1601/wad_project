<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home"><img src="../assets/logo.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a href="/new" class="nav-link">Create Itinerary</a>
          </li>
          <li class="nav-item">
            <a href="/" v-if="cookie != null" @click='logout' class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import VueCookies from 'vue-cookies'
  export default {
    data() {
      return {
        cookie: ''
      }
    },
    created() {
      const cookie = VueCookies.get('id')
      this.cookie = cookie
    },
    methods: {
      logout(){
        VueCookies.remove('id')
        this.$router.push('/map')
      }
    },
  }
</script>

<style scoped>
  img{
    width: 200px;
  }
</style>
