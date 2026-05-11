<template>
  <div id="app">
    <nav class="header">
      <div class="logo"> ElectroShop</div>
      <div class="nav-links">
        <router-link to="/" class="link">Каталог</router-link>
        <router-link to="/cart" class="link">
          Кошик <span class="badge">{{ cart.items.length }}</span>
        </router-link>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from './stores/useCartStore'
const cart = useCartStore()
</script>

<style>
body { margin: 0; font-family: sans-serif; background: #f8f9fa; }
.header { background: #2c3e50; color: white; padding: 15px 50px; display: flex; justify-content: space-between; align-items: center; }
.link { color: white; text-decoration: none; margin-left: 20px; }
.badge { background: #42b983; padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; }
.container { max-width: 1100px; margin: 30px auto; padding: 0 20px; }
</style>