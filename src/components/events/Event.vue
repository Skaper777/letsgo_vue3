<template>
  <div class="event mb2 p15">
    <h3>{{event.title}}</h3>
    <p>Type: {{event.type}}</p>
    <p class="mb1">Members count: {{event.members}}</p>
    <AppButton 
      @click="eventHandler" 
      :btnText="myList ? 'Leave' : 'Join'" 
      isLight
    />
  </div>
</template>

<script setup lang="ts">
import type { EventItem } from '../../types'
import AppButton from '../ui/Button.vue'

interface Props {
  event: EventItem,
  myList: boolean
}

const emit = defineEmits(['eventHandler'])
defineProps<Props>()

function eventHandler() {
  return emit('eventHandler')
}

</script>

<style scoped lang="scss">
.event {
  display: block;
  min-width: 250px;
  border: 1px solid grey;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(0, 0, 0, .4);
}
</style>
