<script setup lang="ts">
const { todo } = defineProps(['todo']);
</script>

<template>
  <li>
    <span>
      <input type="checkbox" />
      <strong>{{todo.id}}</strong>
      {{ todo.name }}
    </span>
    <button>&times;</button>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
