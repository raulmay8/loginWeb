<template>
    <div>
      <LoginForm @login-success="handleLoginSuccess" />
      <RegistrationForm />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import LoginForm from '../components/FormularioLog.vue'
  import RegistrationForm from '../components/FormularioReg.vue'
  
  const isLoggedIn = ref(false)
  const user = ref(null)
  
  const handleLoginSuccess = (loggedInUser) => {
    isLoggedIn.value = true
    user.value = loggedInUser
  }
  </script>
  
  