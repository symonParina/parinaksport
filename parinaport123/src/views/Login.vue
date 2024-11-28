<template>
  <div class="login-background">
    <div class="login-container">
      <h2>Login to ParinaHub</h2>
      <form @submit.prevent="handleLogin">
        <input 
          type="text" 
          v-model="username" 
          placeholder="Username" 
          required 
        />
        <input 
          type="password" 
          v-model="password" 
          placeholder="Password" 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

// Constants for valid credentials
const validUsername = 'admin123';
const validPassword = 'admin';

const handleLogin = async () => {
  if (username.value === validUsername && password.value === validPassword) {
    alert('Login successful!'); // Alert for successful login
    await router.push('/Dashboard'); // Redirect to /dashboard
  } else {
    alert('Invalid credentials, please try again.'); // Alert for invalid credentials
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.login-background {
  background-image: url('@/assets/gif.gif'); /* Updated to gif.gif */
  background-size: cover; /* Make the GIF cover the full screen */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Avoid repeating the GIF */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
}

.login-container {
  background: rgba(255, 255, 255, 0.85); /* Semi-transparent white */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}

h2 {
  margin-bottom: 20px;
  font-weight: bolder;
  color: #3ed304;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background: #06f10e;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0c6d11;
}
</style>
