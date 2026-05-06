import CardItem from './components/CardItem.js';

const { createApp } = Vue;

createApp({
    components: {
        CardItem
    },
    data() {
        return {
            currentCategory: 'all',
            cart: [],
            categories: [
                { id: 'all', name: 'Всі' },
                { id: 'smartphones', name: 'Смартфони' },
                { id: 'laptops', name: 'Ноутбуки' },
                { id: 'accessories', name: 'Аксесуари' }
            ],
            // Дані перенесені з вашого HTML[cite: 6]
            products: [
                { id: 1, name: 'Смартфон Pro', price: 55000, cat: 'smartphones', img: 'pro.jpg' },
                { id: 2, name: 'Ноутбук Air', price: 42000, cat: 'laptops', img: 'netbook air.jfif' },
                { id: 3, name: 'Навушники Bass', price: 3500, cat: 'accessories', img: 'headphones.jpg' },
                { id: 4, name: 'Планшет Tab', price: 25000, cat: 'smartphones', img: 'Tablet.jpg' },
                { id: 5, name: 'Годинник Smart', price: 12000, cat: 'accessories', img: 'smart watch.jpg' },
                { id: 6, name: 'Колонки Hi-Fi', price: 8900, cat: 'accessories', img: 'columns.jpg' },
                { id: 7, name: 'Мишка Gaming', price: 2100, cat: 'accessories', img: 'mous.jpg' },
                { id: 8, name: 'Клавіатура RGB', price: 4500, cat: 'accessories', img: 'keyboard.jpg' },
                { id: 9, name: 'Монітор 4K', price: 18000, cat: 'accessories', img: 'monitor.jpg' }
            ]
        };
    },
    computed: {
        // Логіка фільтрації (замість ручного перебору в script.js)[cite: 1, 5]
        filteredProducts() {
            if (this.currentCategory === 'all') return this.products;
            return this.products.filter(p => p.cat === this.currentCategory);
        },
        // Підрахунок суми кошика
        totalPrice() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    },
    methods: {
        // Отримання даних від дитини через $emit[cite: 1]
        handleAddToCart(product) {
            this.cart.push({ ...product, cartId: Date.now() + Math.random() });
        },
        removeFromCart(cartId) {
            this.cart = this.cart.filter(item => item.cartId !== cartId);
        }
    }
}).mount('#app');