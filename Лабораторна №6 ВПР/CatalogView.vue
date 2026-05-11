<template>
  <div class="catalog">
    <h2 class="title">⚡ Каталог товарів</h2>

    <!-- Блок фільтрації -->
    <div class="filter-section">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Пошук товарів..." 
        class="search-input"
      />
      
      <div class="category-filters">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="['filter-btn', { active: selectedCategory === cat }]"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Сітка товарів -->
    <div class="product-grid">
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <div class="image-wrapper">
          <img :src="product.image" :alt="product.name" class="product-img">
        </div>
        <div class="card-body">
          <span class="category-tag">{{ product.category }}</span>
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} <span>грн</span></p>
          <button @click="cart.addItem(product)" class="add-btn">Додати в кошик</button>
        </div>
      </div>
    </div>

    <!-- Повідомлення, якщо нічого не знайдено -->
    <div v-if="filteredProducts.length === 0" class="no-results">
      Нічого не знайдено за вашим запитом 😕
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/useCartStore'

const cart = useCartStore()

// Стан для фільтрів
const searchQuery = ref('')
const selectedCategory = ref('Всі')
const categories = ['Всі', 'Смартфони', 'Ноутбуки', 'Аксесуари', 'Гаджети']

const products = [
  { id: 1, name: 'Samsung S24', price: 32000, category: 'Смартфони', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=500' },
  { id: 2, name: 'ASUS ROG Strix', price: 54000, category: 'Ноутбуки', image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=500' },
  { id: 3, name: 'Sony XM5', price: 12500, category: 'Аксесуари', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=500' },
  { id: 4, name: 'iPad Air', price: 28000, category: 'Гаджети', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500' },
  { id: 5, name: 'Apple Watch', price: 15000, category: 'Гаджети', image: 'https://images.unsplash.com/photo-1544117518-30dd5ff7a4b0?q=80&w=500' },
  { id: 6, name: 'Монітор Gaming', price: 18000, category: 'Аксесуари', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500' },
  { id: 7, name: 'PlayStation 5', price: 24000, category: 'Гаджети', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=500' },
  { id: 8, name: 'Logitech Mouse', price: 3200, category: 'Аксесуари', image: 'https://images.unsplash.com/photo-1527443195645-1133e7d2b33a?q=80&w=500' }
]

// Логіка фільтрації
const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'Всі' || product.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
.filter-section { margin-bottom: 30px; display: flex; flex-direction: column; gap: 15px; align-items: center; }
.search-input { padding: 12px; width: 100%; max-width: 400px; border-radius: 8px; border: 1px solid #ddd; font-size: 1rem; }
.category-filters { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.filter-btn { padding: 8px 16px; border-radius: 20px; border: 1px solid #2c3e50; background: white; cursor: pointer; transition: 0.3s; }
.filter-btn.active { background: #2c3e50; color: white; }

.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
.product-card { background: white; border-radius: 12px; border: 1px solid #eee; overflow: hidden; padding: 10px; transition: 0.3s; }
.product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.image-wrapper { width: 100%; height: 150px; }
.product-img { width: 100%; height: 100%; object-fit: contain; }

.category-tag { font-size: 0.7rem; background: #f0f0f0; padding: 2px 8px; border-radius: 10px; color: #666; }
.price { font-weight: bold; font-size: 1.2rem; color: #42b983; margin: 10px 0; }
.add-btn { background: #42b983; color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer; width: 100%; font-weight: bold; }
.no-results { text-align: center; padding: 50px; font-size: 1.2rem; color: #999; }
</style>