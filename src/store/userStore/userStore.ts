import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { User } from './types'
import { EventItem } from '../eventsStore/types'
import { useEventsStore } from '../eventsStore/eventsStore'

interface Store {
  userTemplate: User,
  user: User
}

function newUser(): User {
  return {
    id: `user${Math.random()}`,
    name: '',
    email: '',
    events: []
  }
}

export const useUserStore = defineStore('user', () => {
  const state = reactive<Store>({
    userTemplate: newUser(),
    user: {
      id: '0',
      name: '',
      email: '',
      events: [
        {
          id: `event3`,
          title: 'Walk',
          members: 10,
          type: 'Workout',
          date: new Date('2013-01-01')
        }
      ]
    }
  })

  const eventsStore = useEventsStore()

  function joinEvent(event: EventItem): void {
    eventsStore.removeEvent(event)
    state.user.events.push(event)  
  }

  function leaveEvent(event: EventItem): void {
    eventsStore.addEvent(event)
    state.user.events = state.user.events.filter((userEvent: EventItem) => userEvent.id !== event.id)
  }

  function setDefaultUser(): void {
    state.userTemplate = newUser()
  }

  const user = computed(() => state.user as User)
  const userForm = computed(() => state.userTemplate as User)

  return {
    user,
    userForm,
    joinEvent,
    leaveEvent,
    setDefaultUser
  }
})