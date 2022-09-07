import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { EventItem } from '../types'

interface Store {
  events: EventItem[]
}

export const useEventsStore = defineStore('events', () => {
  const state = reactive<Store>({
    events: []
  })

  return {
    state
  }
})