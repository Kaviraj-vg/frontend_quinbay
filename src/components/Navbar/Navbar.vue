<template>
  <div class="navbar">
    <div class="logo" @click="toggleSidebar">Blibli e-commerce</div>
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Search..." 
      @keyup="searchProducts"
    />
    <div class="login">Login</div>
  </div>
</template>

<script src="./Navbar.js"></script>


