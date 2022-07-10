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
import { defineComponent, PropType, watch, toRefs } from 'vue'
import eventItem from './eventItem.vue'
import { EventItem } from '@/types/EventItem.interface'

export default defineComponent({
  name: 'eventsList',  
  components: {
    eventItem
  },  
  props: {
    events: {
      type: Array as PropType<Array<EventItem>>,
      default: () => ([]),
      required: true
    },
    listType: {
      validator: (value: string) => ['myList', 'commonList'].includes(value),      
      default: 'commonList'
    }
  },
  
  setup(props) {   
    const {events} = toRefs(props)     

    watch(events, () => console.log(events.value))   
  }
})
</script>


