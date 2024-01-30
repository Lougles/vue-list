<script type="module" setup lang="ts">
  import { useTodoListStore } from '../stores/list';
  import TodoItem from '@/components/TodoItem.vue';
  const { todos, add } = useTodoListStore();
</script>

<template>
  <div class="TodoListWrapper">
    <h1>Todo List </h1>
    <ul>
      <TodoItem
          v-for="todo of todos"
          :todo="todo"/>
    </ul>
  </div>
</template>

<style scoped>
  .TodoListWrapper {
    margin: 50px auto 0;
    padding: 0 15px 15px 15px;
  }
  div > h1 {
    text-align: center;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
