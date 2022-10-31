<script setup>
  import Header from './components/Header.vue'
  import Home from './components/Home.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style>

.bg-yellow {
  background-color: #FCE499;
}

.text-yellow {
  color: #FCE499;
}

</style>
