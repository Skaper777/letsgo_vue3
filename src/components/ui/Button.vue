<template>
  <div>
    <button :class="isLight ? 'button button--light' : 'button'" @click.prevent="emit('click')">{{ btnText }}</button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click'])

defineProps<{
  btnText: string,
  isLight?: boolean
}>()

</script>

<style lang="scss" scoped>
.button {
  display: block;
  margin: 0 auto;
  border: 1px solid gray;
  padding: .5em 1em;
  border-radius: 10px;
    
  &--light {
    background-color: white;
    color: black;
    border: 1px solid white;
  }
}
</style>