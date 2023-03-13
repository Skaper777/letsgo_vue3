<template>
  <div class="checkbox-box">
    <label class="paragraph075">
      {{ label }}
      <input 
        :checked="checked" 
        @input="updateValue" 
        type="checkbox"
      />
      <span></span>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:checked'])

function updateValue(ev: Event) {
  const { target } = ev
  emit('update:checked', (target as HTMLInputElement).checked)
}

</script>

<style lang="scss" scoped>
.checkbox-box {
  display: flex;
  position: relative;
  padding-left: 27px;

  label {
    height: 20px;
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: inherit;
    width: 20px;
    background: grey;
    border-radius: 5px;

    &::after {
      content: '';
      position: absolute;
      width: 5px;
      left: 6px;
      top: 2px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
  }

  input:checked ~ span::after {
    opacity: 1;
  }
}
</style>