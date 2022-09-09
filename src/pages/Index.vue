<template>
  <div class="container">
    <div class="events-container">
      <EventsList title="Events" :events="events" />
      <EventsList title="My events" :events="myEvents" />
    </div>    
  </div>
</template>

<script lang="ts" setup>
import { useEventsStore } from '../store/index'
import { storeToRefs } from 'pinia'
import EventsList from '../components/events/EventsList.vue'

const { events } = storeToRefs(useEventsStore())
const { myEvents } = storeToRefs(useEventsStore())

</script>

<style lang="scss" scoped>
.events-container {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
}
</style>