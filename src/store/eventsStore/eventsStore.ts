import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { EventItem } from './types'

interface Store {
  events: EventItem[]
}

export const useEventsStore = defineStore('events', () => {
  const state = reactive<Store>({
    events: [
      {
        id: `event1`,
        title: 'Run',
        members: 4,
        type: 'Workout',
        date: new Date('2012-01-01')
      },
      {
        id: `event2`,
        title: 'Cycle',
        members: 2,
        type: 'Workout',
        date: new Date('2011-01-01')
      },
      {
        id: `event3`,
        title: 'Walk',
        members: 10,
        type: 'Workout',
        date: new Date('2013-01-01')
      }
    ]
  })

  function addEvent(payload: EventItem): void {
    if (!state.events.find((event) => event.id === payload.id)) state.events.push(payload)
  }

  function removeEvent(payload: EventItem): void {
    state.events = state.events.filter((item: EventItem) => item.id !== payload.id)
  }

  const events = computed(() => {
    return state.events.sort((a: EventItem, b: EventItem) => b.date.getTime() - a.date.getTime()) as Array<EventItem>
  })
    

  return {
    events,
    addEvent,
    removeEvent
  }
})