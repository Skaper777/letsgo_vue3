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
        members: 4,
        type: 'Workout'
      },
      {
        id: `event${Math.random()}`,
        title: 'Cycle',
        members: 2,
        type: 'Workout'
      },
      {
        id: `event${Math.random()}`,
        title: 'Walk',
        members: 10,
        type: 'Workout'
      }
    ],
    myEvents: [
      {
        id: `event${Math.random()}`,
        title: 'Own',
        members: 1,
        type: 'Other'
      }
    ]
  })

  const events = computed(() => state.events as Array<EventItem>)
  const myEvents = computed(() => state.myEvents as Array<EventItem>)

  function joinEvent(event: EventItem) {
    state.events = state.events.filter((item: EventItem) => item.id !== event.id)
    state.myEvents.push(event)    
  }
  
  function leaveEvent(event: EventItem) {
    state.myEvents = state.myEvents.filter((item: EventItem) => item.id !== event.id)
    state.events.push(event)
  }

  return {
    events,
    myEvents,
    joinEvent,
    leaveEvent
  }
})