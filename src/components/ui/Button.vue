<template>
  <div>
    <button class="button" @click.prevent="emit('click')">{{ btnText }}</button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click'])

defineProps<{
  btnText: string
}>()

</script>

<style lang="scss" scoped>
.button {
  display: block;
  margin: 0 auto;
  border: 1px solid gray
}
</style>