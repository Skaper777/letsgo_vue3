<template>
  <div class="container pt4 pb3">
    <div class="events-container">
      <EventsList 
        title="Events" 
        :events="filteredByUser" 
        :alone="!user.events.length"
        @listFunc="joinEvent" 
      />
      <EventsList 
        title="My events" 
        :events="user.events" 
        :alone="!events.length"
        isMyList 
        @listFunc="leaveEvent" 
      />
    </div>    
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useEventsStore } from '../store/eventsStore/eventsStore'
import { useUserStore } from '../store/userStore/userStore'
import { storeToRefs } from 'pinia'
import EventsList from '../components/events/EventsList.vue'
import { EventItem } from '@/store/eventsStore/types'

const { events } = storeToRefs(useEventsStore())
const { user } = storeToRefs(useUserStore())
const { joinEvent, leaveEvent } = useUserStore()

const filteredByUser = computed(() => {
  return events.value.filter((event) => event.id !== user.value.events.find((userEvent: EventItem) => userEvent.id === event.id)?.id)
})

</script>

<style lang="scss" scoped>
.events-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  justify-content: space-evenly;
}
</style>