<template>
  <Template>
    <div class="login-popup">
      <Input 
        class="mb1"
        v-model="userForm.name"
        :error="firstNameValidation(userForm.name)"
        label="Name"
      />
      <Input 
        class="mb2"
        v-model="userForm.email"
        :error="emailValidation(userForm.email)"
        label="Email"
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
import Template from './TemplatePopup.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import eventBus from '@/utils/eventBus'
import { storeToRefs } from 'pinia'
import { firstNameValidation, emailValidation } from '@/utils/validations'
import { useUserStore } from '@/store/userStore/userStore'

const { userForm } = storeToRefs(useUserStore())

function signUp(): void {
  eventBus.emit('closePopup')
}

function validateForm() {
  // return !firstNameValidation(firstName.value).length && !emailValidation(email.value).length
}

</script>