<template>
  <div class="container">
    <div class="events-container">
      <EventsList 
        title="Events" 
        :events="events" 
        :alone="!myEvents.length"
        @listFunc="joinEvent" 
      />
      <EventsList 
        title="My events" 
        :events="myEvents" 
        :alone="!events.length"
        isMyList 
        @listFunc="leaveEvent" 
      />
    </div>    
  </div>
</template>

<script lang="ts" setup>
import { useEventsStore } from '../store/index'
import { storeToRefs } from 'pinia'
import EventsList from '../components/events/EventsList.vue'

const { events } = storeToRefs(useEventsStore())
const { myEvents } = storeToRefs(useEventsStore())
const { joinEvent, leaveEvent } = useEventsStore()

</script>

<style lang="scss" scoped>
.events-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  justify-content: space-evenly;
}
</style>