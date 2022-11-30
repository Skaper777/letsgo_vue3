<template>
  <div :class="alone ? 'events-list events-list--alone' : 'events-list'" v-if="events.length">
    <h2>{{ props.title }}</h2>
    <ul v-if="events.length">
      <li v-for="event in events" :key="event.id">  
        <Event :event="event" :myList="isMyList" @eventHandler="listHandler(event)" />
      </li>
    </ul>    
  </div>
</template>

<script setup lang="ts">
import Event from './Event.vue'
import { EventItem } from '../../types/index'

const props = defineProps({
  alone: {
    type: Boolean,
    default: false
  }, 
  events: {
    type: Array<EventItem>,
    default: () => []
  },
  isMyList: {
    type: Boolean,
    default: false
  },
  title: String
})

const emit = defineEmits(['listFunc'])

function listHandler(event: EventItem) {
  return emit('listFunc', event)
}

</script>

<style lang="scss" scoped>
.events-list {
  display: block;
  justify-self: center;

  &--alone {
    width: 100%;

    ul {
      display: grid;
      grid-gap: 1.2em;
      grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    }    
  }
}
</style>