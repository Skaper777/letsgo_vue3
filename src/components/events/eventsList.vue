<template>
  <div class="eventsList">
    <ul v-if="events.length">
      <li v-for="(item, index) in events" :key="index">
        <eventItem :event="item" />
      </li>
    </ul>    
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import eventItem from './eventItem.vue'

export default defineComponent({
  name: 'eventsList',  
  components: {
    eventItem
  },  

  setup(props, context) {
    const store = useStore()
    store.dispatch('loadEvents')  

    let events = computed<Array<object>>(() => store.getters.getEvents)   

    return {
      events
    }
  }
})
</script>


