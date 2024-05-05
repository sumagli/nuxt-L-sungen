<script setup>
import { defineProps } from "vue";
import { useToDoStore } from "../stores/toDoStore";
const toDoStore = useToDoStore();
const deleteItem = () => toDoStore.deleteItem(props.itemName);

const props = defineProps({
  itemName: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    default: null,
  },
});

</script>

<template>
  <div class="item">
    <input type="checkbox" id="checkItem" />
    <label for="checkItem">{{ itemName }}
      <span v-if="itemPrice">price: {{ itemPrice }}</span>
    </label>
    <button type="button" @click="deleteItem">Delete</button>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s;
}

input[type="checkbox"] {
  margin-right: 10px;
}

button {
  margin-left: auto;
  padding: 5px 10px;
  color: #fff;
  background-color: #ff5252;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ff6161;
}
</style>
