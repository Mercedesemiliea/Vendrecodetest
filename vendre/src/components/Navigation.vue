<template>
    <nav class="navigation">
      
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/Contact" class="nav-link">Contact</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Navigation'
  });
  </script>

