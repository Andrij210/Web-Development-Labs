import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const totalPrice = computed(() => 
    items.value.reduce((sum, item) => sum + item.price, 0)
  )

  function addItem(product) {
    items.value.push(product)
  }

  function removeItem(index) {
    items.value.splice(index, 1)
  }

  return { items, totalPrice, addItem, removeItem }
})