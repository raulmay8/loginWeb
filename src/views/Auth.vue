<template>
    <div>
      <LoginForm @login-success="handleLoginSuccess" />
    </div>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '../components/FormularioLog.vue'
import router from '@/router';
  
  const isLoggedIn = ref(false)
  const user = ref(null)
  
  const handleLoginSuccess = (loggedInUser) => {
    isLoggedIn.value = true
    user.value = loggedInUser
    router.push('/home')
  }
  </script>
  
  