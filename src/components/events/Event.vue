<template>
  <div class="event">
    <h2>{{event.title}}</h2>
  </div>
</template>

<script setup lang="ts">
import type { EventItem } from '../../types'

interface Props {
  event: EventItem
}

defineProps<Props>()

</script>

<style scoped lang="scss">

</style>