<script setup>
import { ref } from "vue";
import ListItem from "../components/ToDoEmit/ListItem.vue";

const items = ref([]);
const newItemName = ref("");
const newItemPrice = ref(null);

const addItem = () => {
    if (newItemName.value.trim()) {
        items.value.push({
            name: newItemName.value,
            price: newItemPrice.value
        });
        newItemName.value = "";
        newItemPrice.value = null;
    }
};

const deleteItem = (itemName) => {
    items.value = items.value.filter((item) => item.name !== itemName);
};

const calculateSum = () => {
    let sum = 0;
    for (let item of items.value) {
        if (item.price) {
            sum += item.price;
        }
    }
    return sum;
};
</script>

<template>
    <div class="todo-container">
        <h1>Einkaufsliste Liste</h1>
        <div class="list-items">
            <div v-for="item in items" :key="item">
                <ListItem :itemName="item.name" :itemPrice="item.price" @deleteItem="deleteItem" />
            </div>
        </div>
        <div id="create" class="item-creation">
            <div class="boxes">
                <input type="text" v-model="newItemName" name="name" placeholder="Enter item name" />
                <input type="number" v-model="newItemPrice" name="price" placeholder="Enter item price" />
            </div>
            <button type="button" @click="addItem">Create</button>
        </div>
        <div class="counter-display">
            <p>Cost: {{ calculateSum() }}</p>
        </div>
    </div>
</template>

<style scoped>
.todo-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}

h1 {
    color: #42b883;
}

.list-items,
.item-creation,
.counter-display {
    margin-bottom: 20px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: calc(50%);

}

.boxes {
    display: flex;
    margin-bottom: 10px;
    gap: 10px;
}

button {
    padding: 10px 20px;
    margin-top: 5px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #42b88388;
}

.counter-display p {
    font-weight: bold;
    color: #fcfcfc;
}

body,
html {
    background-color: #1A1A1A;
    color: white;
    font-family: verdana;
    margin: 0;
    height: 100%;
    width: 100%;
}
</style>
