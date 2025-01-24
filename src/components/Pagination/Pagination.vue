<template>
  <div class="pagination">
    <button 
      :disabled="currentPage === 1" 
      @click="changePage(-1)"
    >
      <
    </button>
    <span>{{ currentPage }}</span>
    <button 
      :disabled="isLastPage" 
      @click="changePage(1)"
    >
      >
    </button>
  </div>
</template>

<script src="./Pagination.js"></script>



