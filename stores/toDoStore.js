export const useToDoStore = defineStore("useToDoStore", () => {
  const items = ref([]);

  const addItem = (object) => {
    items.value.push(object);
  };

  const deleteItem = (itemName) => {
    items.value = items.value.filter((item) => item.name !== itemName);
  };

  return { items, addItem, deleteItem };
});
