<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="graypanel"></div>
  <h1 class="maintittle">LOGIN Assigment Seats SOCC</h1>
  <img class="mainimg" src="../assets/IBM-CR-cropped.jpg" alt="failed">

  <div class="login-form-container">
    <form @submit="submitLogin" class="login-form">
      
      <!-- Campo para el email -->
      <input 
        type="email" 
        v-model="email" 
        placeholder="Email" 
        required 
        class="input-field" 
      />
      
      <!-- Campo para la contraseña -->
      <input 
        type="password" 
        v-model="password" 
        placeholder="Password" 
        required 
        class="input-field" 
      />
      
      <!-- Boton de login -->
      <button type="submit" class="submit-btn">Login</button>
      
      <!-- Enlace para "Forgot your password?" -->
      <p class="forgot-password">
        <a href="#">Forgot your password?</a>
      </p>
      
      <!-- Linea divisora -->
      <hr class="divider" />
      
      <!-- Texto y enlace para "Don't have an account?" -->
      <p class="register-link">
        Don't have an account? <a href="#">Register here</a>
      </p>
    </form>
  </div>

</template>


<style>

.graypanel{
  z-index: 1; 
  position: absolute;
  background-color: #CECECE; 
  width: 92%;  
  height: 85%;
  top: 52%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  padding: 20px; 
  box-sizing: border-box; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  

}

.maintittle{
  z-index: 2;
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: "IBM Plex Mono";
  font-size: 1.5rem;
  font-weight: bold;
}

.mainimg{
  position: absolute;
  z-index: 3; 
  width: 90%; 
  height: 65%; 
  top: 23%; 
  left: 50%;
  width: 80%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); 
  opacity: 0.6; 
  object-fit: cover; 

}



/* Contenedor del formulario de login */
.login-form-container {
  position: absolute;
  z-index: 5; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  left: 35%;
  background-color: transparent; 
}

/* Estilo del formulario */
.login-form {
  background-color: white;
  padding: 20px;
  width: 500px;
  height: 40%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; 
}

/* Estilo del encabezado del formulario */
.login-form h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

/* Estilo de los campos de entrada */
.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
  background-color: #DCDCDC;
  text-align: center;
  color: #333;
  border-radius: 5px;
  transition: 0.3s; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "IBM Plex Mono";

}

/* Focus en la entrada de datos */
.input-field:focus {
  outline: none;
  border: 1px solid #4679FB; 
  box-shadow: 0 0 5px rgba(70, 121, 251, 0.6); 
}

/* Estilo del botón de envío */
.submit-btn {
  width: 26%;
  padding: 10px;  
  background-color: #4679FB;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

/* Hover del botón de envío */
.submit-btn:hover {
  background-color: #4679FB;
}

/* Estilo de enlace "Forgot your password?" */
.forgot-password {
  font-size: 0.7rem;
  margin-top: 10px;
  font-family: "IBM Plex Mono";
}

.forgot-password a {
  text-decoration: none;
  color: #007bff;
}

.forgot-password a:hover {
  text-decoration: underline;
}

/* Línea divisora */
.divider {
  width: 100%;
  margin: 20px 0;
  border: 0;
  border-top: 1.3px solid black;
  box-shadow: 1 2px 4px rgba(0, 0, 0, 0.1);

}

/* Dont have an account? */
.register-link {
  font-size: 0.7rem;
  font-family: "IBM Plex Mono";
}

.register-link a {
  text-decoration: none;
  color: #007bff;
}

.register-link a:hover {
  text-decoration: underline;
}

</style>