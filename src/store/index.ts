import { createStore } from 'vuex'
import { reactive } from 'vue'
import { EventItem } from '@/types/EventItem.interface'
import axios from 'axios'

interface State {
  events: Array<EventItem>
}

export default createStore<State>({
  state: reactive({
    events: []
  }),
  getters: {
    getEvents(state): Array<EventItem> {
      return state.events
    }
  },
  mutations: {
    setEvents(state, payload: Array<EventItem>): void {
      state.events = [...payload].slice(0, 3)      
    },

    removeEvent(state, payload: number): void {
      state.events = state.events.filter(item => item.id !== payload)
    }
  },
  actions: {
    async loadEvents({commit}): Promise<void> {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')        
        commit('setEvents', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteEvent({commit}, payload: number): Promise<void> {
      try {
        commit('removeEvent', payload)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
