import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

export const useIdopontFoglalasStore = defineStore('foglalas', () => {
    const foglalasok = ref([])
    const szemely = ref({})
    const toast = useToast()
    const total = ref(0)
    
    const loadAll = () => {
      fetch("http://localhost:3000/db")
      .then(resp => resp.json())
      .then(data => products.value = data)
    }

    const saveSzemely = (p) => {
      console.log(p)
      products.value.push(p)
      axios.post("http://localhost:3000/db",p)
      .then(resp => {
        console.log(resp.statusText)
        toast("Sikeres mentés");
      })
      .catch(() => toast.error("Hiba"))
    }
  
    return { foglalasok , szemely, loadAll, saveSzemely}
  })