<template>
  <Template>
    <div class="login-popup">
      hello

      <Button btnText="Login" @click="login" />
    </div>
  </Template> 
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Template from './TemplatePopup.vue'
import Button from '../ui/Button.vue'
import eventBus from '../../utils/eventBus'

function login() {
  eventBus.emit('closePopup')
}

</script>