<template>
    <div>
      <h1>Welcome to Our Store</h1>
      <button @click="goToInventory">Go to Inventory</button>
    </div>
  </template>


  <script>
  import { productStore } from "@/stores/productStore";
  export default {
    name: "HomePage",
    methods: {
      goToInventory() {
        // const store = productStore();
        // store.loadProducts();
        this.$router.push("/inventory")
      },
    },
  };
  </script>
  