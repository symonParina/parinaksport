<template>
  <header class="header">
    <RouterLink to="/" class="logout-link" @click.prevent="logout">Log out</RouterLink>
  </header>
  <div class="dashboard">
    <h1>Welcome to Your Dashboard</h1>
    <p>Here you can manage your portfolio and access different sections.</p>
    
    <div class="navigation">
      <router-link to="/portfolio/Profile" class="nav-link">Profile</router-link>
      <router-link to="/portfolio/Portshow" class="nav-link">Portfolio Showcase</router-link>
      <router-link to="/portfolio/Contact" class="nav-link">Contact Me</router-link>
      <router-link to="/portfolio/Creative" class="nav-link">Creative Page</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
  const confirmed = confirm("Are you sure you want to log out?");
  if (confirmed) {
    await router.push('/'); // Redirect to login page
  }
};
</script>

<style scoped>
/* Dashboard styles with a full-screen background */
.dashboard {
  text-align: center;
  padding: 2rem;
  background-image: url('@/assets/bgif.gif'); /* Background GIF */
  background-size: cover; /* Cover the entire area */
  background-position: center; /* Center the image */
  min-height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  display: flex; /* Flexbox for layout */
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  position: fixed; /* Fixed positioning to cover entire screen */
  top: 0;
  left: 0;
  z-index: 0; /* Set lower z-index to position background behind the header */
}

/* Header styles with higher z-index */
.header {
  position: absolute; /* Positioning the header absolutely */
  top: 1rem; /* Distance from the top */
  left: 1rem; /* Distance from the left */
  z-index: 1; /* Ensure header appears above the background */
}

/* Logout button styling */
.logout-link {
  padding: 0.5rem 1rem; /* Padding inside the link */
  background-color: rgba(0, 255, 0, 0.8); /* Blue background */
  color: rgb(240, 240, 240); /* Light text color */
  border-radius: 4px; /* Rounded corners */
  text-decoration: none; /* Remove underline */
  font-size: 1rem; /* Adjust font size */
  transition: background-color 0.3s ease; /* Smooth hover transition */
}

.logout-link:hover {
  background-color: rgba(7, 138, 3, 0.8); /* Darker shade on hover */
}

/* Styling for navigation links */
.navigation {
  margin-top: 2rem; /* Space above navigation links */
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  justify-content: center; /* Center align links horizontally */
  gap: 1rem; /* Space between links */
}

.nav-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: rgba(17, 212, 66, 0.9); /* Green background */
  color: rgb(240, 240, 240); /* Light text color */
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease; /* Smooth hover transition */
}

.nav-link:hover {
  background-color: rgba(5, 206, 32, 0.623); /* Slightly lighter green on hover */
}

/* Text styles */
h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: rgb(240, 240, 240); /* Light text color */
}

p {
  font-size: 1.5rem;
  color: rgb(220, 220, 220); /* Slightly lighter text color */
}
</style>
