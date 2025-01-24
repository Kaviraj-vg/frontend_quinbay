<template>
  <div class="sidebar" :class="{ active: isActive }">
    <h3>Categories</h3>
    <div class="category" v-for="category in categories" :key="category.id">
      <input 
        type="radio" 
        :id="category.id" 
        name="category" 
        @change="selectCategory(category.id)" 
      />
      <label :for="category.id">{{ category.name }}</label>
    </div>
    <div class="price-filter">
      <h4>Price Filter</h4>
      <input 
        type="number" 
        v-model="minPrice" 
        placeholder="Min Price" 
        min="0" 
      />
      <input 
        type="number" 
        v-model="maxPrice" 
        placeholder="Max Price" 
        min="0" 
      />
      <button @click="applyPriceFilter">Apply</button>
    </div>
  </div>
</template>

<script src="./Sidebar.js"></script>


