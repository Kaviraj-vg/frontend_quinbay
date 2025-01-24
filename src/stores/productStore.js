import { defineStore } from "pinia";
import productsData from "@/assets/products.json";

export const productStore = defineStore("productStore", {
  state: () => ({
    products: [],
  }),
  actions: {
    async loadProducts() {

        const response = await fetch("http://localhost:8081/catalog/products");

        this.products = await response.json();
        console.log("db products")

        console.log(this.products)
 
      // this.products = productsData;
    },    
  },
  getters: {
    getProducts: (state) => state.products,
  },
});
