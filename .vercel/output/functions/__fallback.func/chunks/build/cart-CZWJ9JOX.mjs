import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useCartStore = defineStore("cart", () => {
  const items = ref([]);
  const isOpen = ref(false);
  const totalItems = computed(() => items.value.reduce((total, item) => total + item.quantity, 0));
  const totalPrice = computed(() => items.value.reduce((total, item) => total + item.price * item.quantity, 0));
  const formattedSubtotal = computed(() => `$${totalPrice.value.toLocaleString()}`);
  function addItem(product) {
    const existingItem = items.value.find((i) => i.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  }
  function removeItem(productId) {
    items.value = items.value.filter((i) => i.id !== productId);
  }
  function updateQuantity(productId, quantity) {
    const item = items.value.find((i) => i.id === productId);
    if (item) {
      item.quantity = Math.max(0, quantity);
      if (item.quantity === 0) removeItem(productId);
    }
  }
  function clearCart() {
    items.value = [];
  }
  function toggleCart() {
    isOpen.value = !isOpen.value;
  }
  function openCart() {
    isOpen.value = true;
  }
  function closeCart() {
    isOpen.value = false;
  }
  return {
    items,
    isOpen,
    totalItems,
    totalPrice,
    formattedSubtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart
  };
});

export { useCartStore as u };
//# sourceMappingURL=cart-CZWJ9JOX.mjs.map
