<template>
  <teleport to='body'>
    <div class="popup" v-if="isShow">
      <button class="popup-close" @click="isShow = false">Close</button>

      <slot></slot>
    </div>
  </teleport>  
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import eventBus from '../../utils/eventBus'

const isShow = ref(false)

const closePopup = () => {
  isShow.value = false
} 

const openPopup = () => {
  isShow.value = true
}

onMounted(() => {
  eventBus.on('openPopup', openPopup)
  eventBus.on('closePopup', closePopup)
})

onBeforeUnmount(() => {
  eventBus.off('openPopup')
  eventBus.off('closePopup')
})

</script>

<style lang="scss">

</style>