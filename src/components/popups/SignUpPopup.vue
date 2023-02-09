<template>
  <Template>
    <div class="login-popup">
      <Input v-model="firstName" />

      <Button btnText="Sign Up" :isLight="true" @click="signup" />
    </div>
  </Template> 
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Template from './TemplatePopup.vue'
import Button from '../ui/Button.vue'
import Input from '../ui/Input.vue'
import eventBus from '../../utils/eventBus'

const firstName = ref<string>('')

function signup() {
  eventBus.emit('closePopup')
}

</script>