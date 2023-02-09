<template>
  <div class="input-box">
    <input
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
defineProps(['modelValue'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style lang="scss" scoped>
.input-box {
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid $main-color;
    border-radius: 8px;
  }
}
</style>