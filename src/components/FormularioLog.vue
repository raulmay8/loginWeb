<template>
    <div class="login">
      <h2 class="title">Login</h2>
      <form  @submit.prevent="login" class="form">
        <label class="form-label" for="email">Email: </label>
        <input
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
          v-model="loginData.email"
        />
        <label class="form-label" for="password">Password: </label>
        <input
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
          required
          v-model="loginData.password"
        />
        <button class="form-submit" type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue'

const loginData = ref({ email: '', password: '' })

const login = () => {
  const storedUserString = localStorage.getItem(loginData.value.email)
  if (storedUserString !== null) {
    const storedUser = JSON.parse(storedUserString)
    if (storedUser.password === loginData.value.password) {
      alert('Inicio de sesión exitoso')
    } else {
      alert('Correo o contraseña incorrectos')
    }
  } else {
    alert('El correo proporcionado no está registrado')
  }
};
  </script>


<style scoped>
.login {
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