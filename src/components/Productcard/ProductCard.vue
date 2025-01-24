<template>
  <div class="product-card" @click="viewProduct">
    <img :src="product.img" :alt="product.name" />
    <h4>{{ product.name }}</h4>
    <p>${{ product.price }}</p>
  </div>
</template>

<script src="./ProductCard.js"></script>