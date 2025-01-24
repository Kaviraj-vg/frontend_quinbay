import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import ProductCard from "@/components/ProductCard/ProductCard.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
// import productsData from "@/assets/products.json";
import { mapState, mapActions } from "pinia";


import { productStore } from "@/stores/productStore";


export default {
  components: {
    Navbar,
    Sidebar,
    ProductCard,
    Pagination
  },
  data() {
    return {
      searchQuery: "",
      allProducts: [],
      filteredProducts: [],
      currentPage: 1,
      categories: [
        { id: "electronics", name: "Electronics" },
        { id: "fashion", name: "Fashion" },
        { id: "home", name: "Home Appliances" }
      ],
      
        itemsPerPage: 6,
      
    };
  },
  computed: {
    totalItems() {
      return this.allProducts.length;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
    },
  },
  
  methods: {
    initializeProducts() {
      const ProductStore = productStore();

      this.productsData = ProductStore.getProducts; 

      this.allProducts = Object.values(this.productsData).flat();
      this.filteredProducts = this.allProducts;
    },
    filterByCategory(categoryId) {
      this.filteredProducts = this.productsData[categoryId] || [];
      this.currentPage = 1;
    },
    filterByPrice({ min, max }) {
      this.filteredProducts = this.allProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
      this.currentPage = 1;
    },
    searchProducts(query) {
      this.searchQuery = query.toLowerCase();
      this.filteredProducts = this.allProducts.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery)
      );
      this.currentPage = 1;
    },
    changePage(newPage) {
      this.currentPage = newPage;
    }
  },
  mounted() {
    this.initializeProducts();
  }
}
