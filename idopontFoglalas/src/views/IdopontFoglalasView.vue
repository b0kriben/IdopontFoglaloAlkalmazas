<script setup>
import {useIdopontFoglalasStore} from '@/stores/foglalas.js'

const idopontFoglalasStore = useIdopontFoglalasStore()
</script>

<template>
  <h1 class="text-center">Foglalt időpontok az orvoshoz</h1>
  <div class="row">
    <div v-for="f in idopontFoglalasStore.foglalasok" :key="f.id" class="card col-12 col-md-4 col-lg-3">
      <p class="card-title text-center">Orvosi időpont</p>
      <div class="card-body">
        <p class="card-text">Időpont: {{f.day}}, {{f.time}}</p>
        <p class="card-text">Név: {{ f.name }}</p>
        <p class="card-text">Telefonszám: {{ f.telnumber }}</p>
      </div>
    </div>
  </div>
</template>
