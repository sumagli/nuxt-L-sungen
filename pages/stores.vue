<script setup>
import { useCounterStore } from "../stores/counterStore";

const counterStore = useCounterStore();

const counter = computed(() => counterStore.count);
const increment = () => counterStore.increment();
const decrement = () => counterStore.decrement();
</script>

<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
<style scoped>
button {
  margin: 5px;
  padding: 5px 10px;
  font-size: 16px;
}
</style>
