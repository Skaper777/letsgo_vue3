<template>
  <teleport to='body'>
    <div class="popup p15" v-if="isShow">
      <h3 class="mb1">Hello!</h3>
      <button class="popup-close" @click="isShow = false"></button>

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
.popup {
  position: absolute;
  left: calc(50% - 15em);
  top: 9em;
  background: #1a1a1a;
  width: 30em;
  border-radius: 10px;
  border: 1px solid grey;
  box-sizing: border-box;

  &-close {
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    position: absolute;
    right: 1.2em;
    top: 1.2em;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 20px;
      height: 2px;
      background: white;
    }

    &::after {
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }
  }
}
</style>