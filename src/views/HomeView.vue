<template>
  <div class="home">
    <eventsList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import eventsList from '@/components/events/eventsList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    eventsList
  },
});
</script>
