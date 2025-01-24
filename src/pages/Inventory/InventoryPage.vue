<template>
  <div>
    <!-- <Navbar @search="searchProducts" /> -->
    <Navbar @search-products="searchProducts"  />


    <div class="container">
      <Sidebar 
        :categories="categories" 
       @filter-category="filterByCategory" 
        @filter-price="filterByPrice" 
      />
      <div class="products" id="products">
        <ProductCard 
          v-for="product in paginatedProducts" 
          :key="product.name" 
          :product="product" 
        />
      </div>
    </div>
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      @change-page="changePage"
    />
  </div>
</template>

<script src="./InventoryPage.js"></script>