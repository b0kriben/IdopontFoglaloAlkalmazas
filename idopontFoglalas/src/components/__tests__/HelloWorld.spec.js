import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import IdopontFoglalas from '../IdopontFoglalas.vue'
import { useIdopontFoglalasStore } from '@/stores/IdopontFoglalas'
import { createPinia, setActivePinia } from 'pinia'
