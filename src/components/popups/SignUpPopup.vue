<template>
  <Template>
    <div class="login-popup">
      <Input 
        class="mb1"
        v-model="firstName"
        :error="firstNameValidation(firstName)"
        label="Name"
      />
      <Button 
        btnText="Sign Up" 
        isLight
        @click="signUp" 
      />
    </div>
  </Template> 
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Template from './TemplatePopup.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import eventBus from '@/utils/eventBus'


function firstNameValidation(value: string): string {
  if (value.length && value.length < 2) return 'Too short'
  return ''
}

const firstName = ref<string>('ss')

function signUp() {
  eventBus.emit('closePopup')
}

</script>