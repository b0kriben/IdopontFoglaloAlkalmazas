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

<style>
body{
  background-color: rgb(212, 167, 255);
}

h1{
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 20px;
  color: black;
}

.card{
  border: 3px solid black;
  margin: 10px;
  background-color: crimson;
  color: white;
}

.card-title{
  font-weight: bolder;
  font-size: 25px;
  color: rgb(13, 0, 61);
}

.card-text{
  font-weight: bold;
}
</style>