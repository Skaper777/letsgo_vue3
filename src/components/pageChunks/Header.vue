<template>
  <header>
    <div class="container">
      <h1>LetsGo!</h1>
      <AppButton class="btn" @click="openSignUpPopup" btnText="Sign Up" />
    </div>   
    
    <SignUpPopup/>
  </header>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/Button.vue'
import SignUpPopup from '@/components/popups/SignUpPopup.vue'
import eventBus from '@/utils/eventBus'

function openSignUpPopup() {
  eventBus.emit('openPopup')
}

</script>

<style scoped lang="scss">
header {
  border-bottom: 1px solid;  

  .container {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;

    h1 {
      font-size: 2.5rem;
      margin: 0;
    }

    .btn {
      justify-self: end;
    }
  }  
}
</style>