<template>
    <div class="login">
      <h1 class="title">Bienvenido!</h1>
      <button class="form-logout" @click="logout">Cerrar sesión</button>
      
      <h2 class="title">Gestión de Dulces</h2>
      <form class="form" @submit.prevent="addDulce">
        <label class="form-label" for="nombre">Nombre del Dulce:</label>
        <input class="form-input" type="text" id="nombre" v-model="nuevoDulce.nombre" required >
        <label class="form-label" for="cantidad">Cantidad:</label>
        <input class="form-input" type="number" id="cantidad" v-model.number="nuevoDulce.cantidad" required>
        <button type="submit" class="form-submit">Agregar Dulce</button>
      </form>
      
      <table class="table">
        <thead>
          <tr>
            <th>Nombre del Dulce</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dulce, index) in dulces" :key="index">
            <td>{{ dulce.nombre }}</td>
            <td>{{ dulce.cantidad }}</td>
            <td>
              <button @click="editDulce(index)" class="button-container">Editar</button>
              <button @click="deleteDulce(index)" class="button-container">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const user = ref(null);
  const dulces = ref(JSON.parse(localStorage.getItem('dulces')) || []);
  
  const router = useRouter();
  
  const logout = () => {
    user.value = null;
    localStorage.removeItem('user');
    router.push('/');
  }
  
  const nuevoDulce = ref({ nombre: '', cantidad: 0 });
  
  const addDulce = () => {
    dulces.value.push({ ...nuevoDulce.value });
    localStorage.setItem('dulces', JSON.stringify(dulces.value));
    nuevoDulce.value = { nombre: '', cantidad: 0 };
  }
  
  const editDulce = (index: number) => {
    const nuevoNombre = prompt('Ingrese el nuevo nombre del dulce:', dulces.value[index].nombre);
    if (nuevoNombre !== null) {
      const nuevaCantidad = parseInt(prompt('Ingrese la nueva cantidad del dulce:', dulces.value[index].cantidad.toString()) || '0');
      dulces.value[index] = { nombre: nuevoNombre, cantidad: nuevaCantidad };
      localStorage.setItem('dulces', JSON.stringify(dulces.value));
    }
  }
  
  const deleteDulce = (index: number) => {
    dulces.value.splice(index, 1);
    localStorage.setItem('dulces', JSON.stringify(dulces.value));
  }
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
.form-logout {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid white; /* Línea horizontal entre filas */
  }
  
  .table th {
    background-color: #1ab188; /* Color de fondo para las celdas de encabezado */
    color: white;
  }
  
  .table td {
    background-color: rgba(255, 255, 255, 0.1); /* Color de fondo para las celdas de datos */
  }
  
  /* Estilos para los botones de acción en la tabla */
  .button-container {
    display: flex;
    justify-content: space-around;
  }
  
  .button-container {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    background-color: #1ab188;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    transition: background-color 0.3s;
    
  }
  
  .button-container:hover {
    background-color: #0b9185;
  }
  
  .table-field {
    padding: 0.25rem 0.5rem;
    border: 1px solid white;
    border-radius: 3px;
  }
  
  .table-field:focus {
    outline: none;
    border-color: #1ab188;
  }
  </style>
  