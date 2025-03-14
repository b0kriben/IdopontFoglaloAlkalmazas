import { mount } from '@vue/test-utils'
import AdatokFelveteleView from '@/views/AdatokFelveteleView.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useIdopontFoglalasStore } from '@/stores/foglalas'
import { vi } from 'vitest'


//AdatokFelveteleView tesztek
describe('AdatokFelveteleView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Form megjelenése', () => {
    const wrapper = mount(AdatokFelveteleView)
    expect(wrapper.text()).toContain('Adatok felvétele')
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('Kezdeti értékek a mezőkben', () => {
    const wrapper = mount(AdatokFelveteleView)
    expect(wrapper.find('select#dayInput').element.value).toBe('')
    expect(wrapper.find('select#timeInput').element.value).toBe('')
    expect(wrapper.find('input[type="text"]').element.value).toBe('')
  })
})




import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'

vi.mock('axios')

//foglalas tesztek
describe('foglalas Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Foglalás mentése valid adatokkal', async () => {
    const store = useIdopontFoglalasStore()
    const newBooking = {
      day: 'hetfo',
      time: '10:00',
      name: 'Kovács Béla',
      telnumber: '06301234567'
    }
    
    axios.post.mockResolvedValueOnce({ statusText: 'OK' })

    await store.saveSzemely(newBooking)

    expect(store.foglalasok.length).toBe(1)
    expect(store.foglalasok[0]).toEqual(newBooking)
    expect(axios.post).toHaveBeenCalledWith("http://localhost:3000/idopontok", newBooking)
  })
})

