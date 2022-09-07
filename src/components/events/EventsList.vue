<template>
  <div class="events-list">
    <Event :event="event" />
  </div>
</template>

<script setup lang="ts">
import Event from './Event.vue'

const event = {
  title: 's',
  id: '2',
  members: 2
}
</script>