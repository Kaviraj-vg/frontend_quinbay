<template>
    <Navbar @search-products="searchProducts"  />

    <div class="product-description">
      <h1>{{ product.name }}</h1>
      <img :src="product.img" :alt="product.name" />
      <p>Price: ${{ product.price }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </template>
  
  <script>
  import { productStore } from "@/stores/productStore";
import Navbar from "@/components/Navbar/Navbar.vue";
  
  export default {
    name: "ProductDescription",
    components: {
                  Navbar
                },
    data() {
      return {
        product: null,
      };
    },
    created() {
      const productName = this.$route.params.name;
      const ProductStore = productStore();
      this.productsData = ProductStore.getProducts; 
      this.allProducts = Object.values(this.productsData).flat()

      this.product = this.allProducts.find(
        (prod) => prod.name === productName
      );
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-description {
    text-align: center;
    padding: 20px;
  }
  
  .product-image {
    width: 300px; 
    height: auto; 
    margin: 20px auto;
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  