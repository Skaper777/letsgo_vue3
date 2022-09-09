<template>
  <div class="events-list">
    <h2>{{ props.title }}</h2>
    <ul v-if="events.length">
      <li v-for="event in events" :key="event.id">  
        <Event :event="event" />
      </li>
    </ul>    
  </div>
</template>

<script setup lang="ts">
import Event from './Event.vue'
import { EventItem } from '../../types/index'

const props = defineProps({
  events: {
    type: Array<EventItem>,
    default: () => []
  },
  title: String
})

</script>

<style lang="scss" scoped>
.events-list {
  display: block;
  justify-self: center;
}
</style>