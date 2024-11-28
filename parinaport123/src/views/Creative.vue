<template>
  <div class="creative">
    <header class="header">
      <RouterLink to="/" class="logout-link" @click.prevent="logout">Log out</RouterLink>
      <button class="go-back" @click="goBack">Go Back to Dashboard</button>
    </header>
    <h2>My Hobbies</h2>
    <div class="hobby-grid">
      <div
        class="hobby-item"
        v-for="(hobby, index) in hobbies"
        :key="index"
        @click="toggleHobby(index)"
      >
        <img
          :src="hobby.image"
          :alt="hobby.name"
          class="hobby-image"
          :class="{ active: selectedHobby === index }"
        />
        <p>{{ hobby.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Music from "@/assets/music.jpg";
import Gaming from "@/assets/gaming.jpg";
import traveling from "@/assets/Travel.jpg";
import basketball from "@/assets/bball.jpg";

const hobbies = [
  { name: "Music", image: Music },
  { name: "Gaming", image: Gaming },
  { name: "Traveling", image: traveling },
  { name: "Basketball", image: basketball },
];

const router = useRouter();
const selectedHobby = ref<number | null>(null);

const toggleHobby = (index: number) => {
  selectedHobby.value = selectedHobby.value === index ? null : index;
};

const goBack = () => {
  router.push("/dashboard");
};

const logout = async () => {
  const confirmed = window.confirm("Are you sure you want to log out?");
  if (confirmed) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await router.push("/");
  }
};
</script>

<style scoped>
.creative {
  text-align: center;
  padding: 2rem;
  background-image: url("@/assets/bgif.gif"); /* Use the bgif.gif file */
  background-size: cover; /* Ensure the background covers the entire area */
  background-position: center; /* Center the background image */
  min-height: 100vh; /* Full height */
  width: 100vw; /* Full width */
  position: fixed; /* Fixed to cover the viewport */
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  position: absolute;
  top: 0;
}

h2 {
  color: #ffffff;
  font-size: 3rem;
  margin: 2rem 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Text shadow for better visibility */
}

.hobby-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.hobby-item {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
}

.hobby-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.hobby-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

p {
  color: #ffffff;
  font-size: 1.2rem;
}

.logout-link,
.go-back {
  background-color: #3cff00;
  color: white;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.logout-link:hover,
.go-back:hover {
  background-color: #0056b3;
}
</style>
