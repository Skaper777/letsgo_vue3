<template>
  <div class="input-box" :class="{'input-box--error': error}">
    <p class="input-box__label paragraph075" v-if="label">{{ label }}</p>
    <input
      :value="modelValue"
      @input="updateValue"
    />
    <p class="input-box__error-text">{{ error }}</p>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true
  },
  error: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})

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

    &:focus-visible {
      outline: none;
    }
  }

  &--error {
    input {
      border-color: red;

      &:focus,
      &:focus-visible {
        outline-color: red;
      }
    }
  }

  &__error-text {
    color: red;
    font-size: 12px;
  }
}
</style>