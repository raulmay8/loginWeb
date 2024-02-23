<template>
    <div class="registro">
      <h2 class="title">Registro</h2>
      <form @submit.prevent="register" class="form">
        <label class="form-label" for="username">Nombre:</label>
        <input class="form-input" type="text" id="username" v-model="registerData.name" required>
        <label class="form-label" for="email">Correo:</label>
        <input class="form-input" type="email" id="email" v-model="registerData.email" required>
        <label class="form-label" for="password">Contraseña:</label>
        <input class="form-input" type="password" id="password" v-model="registerData.password" required>
        <button class="form-submit" type="submit">Registrarse</button>
        <button class="form-submit" @click="goToLogin">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const registerData = ref({ name: '', email: '', password: '' })

  const router = useRouter();

  const register = () => {

    const name = registerData.value.name
    const email = registerData.value.email
    const password = registerData.value.password
  
  if (localStorage.getItem(email) !== null) {
    alert('Ya existe una cuenta con este correo electrónico')
    return
  }

    const userData = {
      name: name,
      email: email,
      password: password
    }
    localStorage.setItem(registerData.value.email, JSON.stringify(userData))
    alert('Usuario registrado correctamente')
  }
  const goToLogin = () => {
  router.push('/inicio');
}
  </script>
  
  <style scoped>
.registro {
  padding: 2rem;
  color: white;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(9, 21, 31, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>