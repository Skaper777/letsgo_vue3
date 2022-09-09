import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { EventItem } from '../types'

interface Store {
  events: EventItem[],
  myEvents: EventItem[]
}

export const useEventsStore = defineStore('events', () => {
  const state = reactive<Store>({
    events: [
      {
        id: `event${Math.random()}`,
        title: 'Run',
        members: 4
      },
      {
        id: `event${Math.random()}`,
        title: 'Cycle',
        members: 2
      },
      {
        id: `event${Math.random()}`,
        title: 'Walk',
        members: 10
      }
    ],
    myEvents: [
      {
        id: `event${Math.random()}`,
        title: 'Own',
        members: 1
      }
    ]
  })

  const events = computed(() => state.events as Array<EventItem>)
  const myEvents = computed(() => state.myEvents as Array<EventItem>)

  return {
    events,
    myEvents
  }
})