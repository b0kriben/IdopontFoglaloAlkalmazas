import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

export const useIdopontFoglalasStore = defineStore('foglalas', () => {
    const foglalasok = ref([])
    const szemely = ref({})
    const toast = useToast()
    
    const loadAll = () => {
      fetch("http://localhost:3000/idopontok")
      .then(resp => resp.json())
      .then(data => foglalasok.value = data)
    }

    const saveSzemely = (f) => {
      if (!f.name || !f.telnumber) {
        toast.error("Kérjük, adja meg a nevet és a telefonszámot!");
        return;
      }

      const exists = foglalasok.value.some(foglalas => 
        foglalas.day === f.day && foglalas.time === f.time
      );

      if (exists) {
        toast.error("Ez az időpont már foglalt!");
        return;
      }

      foglalasok.value.push(f)
      axios.post("http://localhost:3000/idopontok", f)
      .then(resp => {
        console.log(resp.statusText)
        toast.success("Sikeres mentés");
      })
      .catch(() => toast.error("Hiba"))
    }

    return { foglalasok , szemely, loadAll, saveSzemely}
  })

