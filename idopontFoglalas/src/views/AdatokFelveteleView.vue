<template>
    <h1 class="text-center">Adatok felvétele</h1>
    <form class="card w-50 mx-auto" @submit.prevent="foglalasok.saveSzemely(szemely)">
        <p class="felirat m-0">Nap</p>
        <select class="select form-control mb-2" id="dayInput" name="daySelect" required  type="select" v-model="szemely.day" placeholder="Nap">
            <option value="" class="szin" disabled selected hidden>Kattintson a mezőre</option>
            <option value="hetfo">Hétfő</option>
            <option value="kedd">kedd</option>
            <option value="szerda">Szerda</option>
            <option value="csutortok">Csütörtök</option>
            <option value="pentek">Péntek</option>
            <option value="szombat">Szombat</option>
            <option value="vasarnap">Vasárnap</option>
        </select>
        <p class="felirat m-0">Idő</p>
        <select class="select form-control mb-2" id="timeInput" name="timeSelect" required  type="select" v-model="szemely.time" placeholder="Óra">
            <option value="" disabled selected hidden>Kattintson a mezőre</option>
            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
        </select>
        <p class="felirat m-0">Név</p>
        <input class="form-control mb-2" type="text" v-model="szemely.name" placeholder="Személy neve">
        <p class="felirat m-0">Telefonszám</p>
        <input class="form-control mb-2" type="text" v-model="szemely.telnumber" placeholder="Személy telefonszáma"><br>
        <input class="btn btn-outline-dark btn-info" type="submit" value="Mentés">
    </form>
</template>

<script setup>
    import {ref} from 'vue'
    import { useIdopontFoglalasStore } from '@/stores/foglalas';
    const foglalasok = useIdopontFoglalasStore()
    const szemely = ref({           
            "day": "",
            "time": "",
            "name": "",
            "telnumber": ""})
    
</script>

<style>
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
  padding: 10px;
}

.felirat{
  font-weight: bolder;
  font-size: 20px;
}

.btn{
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}
</style>