<template>
  <div class="home">
    <eventsList :events="events" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex'
import eventsList from '@/components/events/eventsList.vue';
import { EventItem } from '@/types/EventItem.interface'

export default defineComponent({
  name: 'HomeView',
  components: {
    eventsList
  },

  setup(props, context) {
    const store = useStore()
    store.dispatch('loadEvents')  

    const events = computed<Array<EventItem>>(() => store.getters.getEvents)   

    return {
      events
    }
  }
});
</script>
