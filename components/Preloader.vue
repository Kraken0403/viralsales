<template>
    <div v-if="loading" class="preloader">
      <!-- Customize your preloader here -->
      <div class="loader">
        <span>Loading...</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const loading = ref(true);
  
  onMounted(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loading.value = false; // Hide preloader once everything is loaded
      }, 1000); // Add slight delay to prevent a flash
    });
  });
  </script>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff; /* Background for the preloader */
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loader {
    font-size: 2rem;
    font-weight: bold;
    color: #333; /* Customize the preloader text or animation */
  }
  </style>
  