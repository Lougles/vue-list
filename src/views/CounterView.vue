<script setup lang="ts">
  import { useCounterStore } from "../stores/counter";
  const counter = useCounterStore();
</script>

<template>
  <div class="CounterWrapper">
    <h1>Counter</h1>
    <p>{{ counter.count }}</p>
    <p>{{ counter.doubleCount }}</p>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>

<style scoped>
  .CounterWrapper {
    margin-top: 50px;
  }
</style>
