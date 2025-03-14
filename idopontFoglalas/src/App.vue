<script setup>
import {onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import{useIdopontFoglalasStore} from '@/stores/foglalas.js'

const idopontFoglalasStore = useIdopontFoglalasStore()

onMounted(() =>{
  idopontFoglalasStore.loadAll()
})
</script>

<template>
  <div class="container">
    <nav class="text-center">
      <RouterLink class="btn btn-outline-info btn-dark m-2" to="/">Időpont Foglalás</RouterLink>
      <RouterLink class="btn btn-outline-info btn-dark m-2" to="/adatok">Adatok felvétele</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
