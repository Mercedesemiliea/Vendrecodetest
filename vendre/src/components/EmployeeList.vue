<template>
    <div>
      <h1>Anställda</h1>
      <div v-if="loading">Laddar...</div>
      <div v-else>
        <div v-for="user in users" :key="user.id" class="user-card">
          <img :src="user.avatar" alt="Profile Picture" class="profile-pic" />
          <h2>{{ user.first_name }} {{ user.last_name }}</h2>
          <a :href="'mailto:' + user.email">{{ user.email }}</a>
        </div>
        <div class="pagination">
          <button @click="fetchUsers(1)">1</button>
          <button @click="fetchUsers(2)">2</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    setup() {
      const users = ref([]);
      const loading = ref(true);
  
      const fetchUsers = async (page = 1) => {
        loading.value = true;
        try {
          const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
          users.value = response.data.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(() => {
        fetchUsers();
      });
  
      return {
        users,
        loading,
        fetchUsers
      };
    }
  });
  </script>
  
  