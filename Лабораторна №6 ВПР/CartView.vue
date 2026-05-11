<template>
  <div class="cart-page">
    <h2>🛒 Ваш кошик</h2>
    <div v-if="cart.items.length === 0" class="empty">
      <p>Кошик порожній</p>
      <router-link to="/">Повернутися до покупок</router-link>
    </div>
    <div v-else>
      <div v-for="(item, index) in cart.items" :key="index" class="cart-item">
        <img :src="item.image" style="width: 50px; height: 50px; object-fit: contain;">
        <span>{{ item.name }}</span>
        <strong>{{ item.price }} грн</strong>
        <button @click="cart.removeItem(index)">❌</button>
      </div>
      <div class="total">
        <h3>Разом до сплати: {{ cart.totalPrice }} грн</h3>
        <button class="pay-btn" @click="confirm">Оформити замовлення</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore'
const cart = useCartStore()
const confirm = () => alert('Замовлення оформлено!')
</script>

<style scoped>
.cart-item { display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid #eee; background: white; margin-bottom: 5px; }
.total { margin-top: 20px; text-align: right; }
.pay-btn { background: #2c3e50; color: white; padding: 15px 30px; border: none; border-radius: 8px; cursor: pointer; }
</style>