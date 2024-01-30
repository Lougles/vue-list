<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/counter">Counter</RouterLink>
        </li>
        <li>
          <RouterLink to="/list">List</RouterLink>
        </li>
      </ul>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
ul {
  display: flex;
  padding: 20px 10px;
  list-style-type: none;
}
</style>
