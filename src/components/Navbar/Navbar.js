export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      toggleSidebar() {
        this.$emit('toggle-sidebar');
      },
      searchProducts() {
        this.$emit('search-products', this.searchQuery);
      }
    }
  };
  