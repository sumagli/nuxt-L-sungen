<script setup>
import { ref } from "vue";

// Reactive reference for users
const users = ref([]);

// Function to fetch users
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    users.value = await response.json(); // Assuming the response is an array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    users.value = [];
  }
}
fetchUsers();
</script>

<template>
  <div class="container">
    <h1>Server-Side Rendering Example</h1>
    <p>This pages data was fetched on the server:</p>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-card">
        <strong>Name:</strong> {{ user.name }}<br />
        <strong>Email:</strong>
        <a :href="`mailto:${user.email}`">{{ user.email }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #666;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: black;
}

.user-card {
  padding: 10px;
  margin: 10px 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.user-card strong {
  color: #333;
}
</style>
