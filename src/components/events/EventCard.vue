<template>
  <div class="event-card mb2 p15">
    <h3>{{ event.title }}</h3>
    <p>Type: {{ event.type }}</p>
    <p>Members count: {{ event.members }}</p>
    <p class="mb1">Date: {{ dateTime(event.date) }}</p>
    <AppButton 
      @click="eventHandler" 
      :btnText="myList ? 'Leave' : 'Join'" 
      isLight
    />
  </div>
</template>

<script setup lang="ts">
import { EventItem } from '@/store/eventsStore/types'
import AppButton from '../ui/Button.vue'
import moment from 'moment'

interface Props {
  event: EventItem,
  myList: boolean
}

const emit = defineEmits(['eventHandler'])
defineProps<Props>()

function dateTime(value: Date): string {
  return moment(value).format('DD.MM.YY')
}

function eventHandler() {
  return emit('eventHandler')
}

</script>

<style scoped lang="scss">
.event-card {
  display: block;
  min-width: 250px;
  border: 1px solid grey;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(0, 0, 0, .4);
}
</style>
