<template>
  <div @click="removeEvent" class="eventItem">
    <h1>{{event.title}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { EventItem } from '@/types/EventItem.interface'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'eventItem', 
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true    
    }
  },

  setup(props, context) {    
    const store = useStore()

    function removeEvent() {
      store.dispatch('deleteEvent', props.event.id)
    }

    return {      
      removeEvent
    }
  }
})
</script>


