export default {
    props: ['product'],
    template: `
        <div class="card">
            <img :src="product.img" :alt="product.name">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }} грн</p>
            <!-- Виклик події для батька[cite: 1] -->
            <button class="filter-btn" @click="$emit('add-to-cart', product)">
                Купити
            </button>
        </div>
    `
};