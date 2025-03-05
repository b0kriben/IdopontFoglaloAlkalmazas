<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IdopontFoglalas from './components/IdopontFoglalas.vue'
</script>

<template>
  <div class="container">
    <nav class="text-center">
      <RouterLink class="btn btn-outline-success m-2" to="/">Időpont Foglalás</RouterLink>
      <RouterLink class="btn btn-outline-success m-2" to="/adatok">Adatok felvétele</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
