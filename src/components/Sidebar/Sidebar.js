export default {
    props: {
      categories: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isActive: false,
        minPrice: '',
        maxPrice: ''
      };
    },
    methods: {
      selectCategory(categoryId) {
        this.$emit('filter-category', categoryId);
      },
      applyPriceFilter() {
        const min = Number(this.minPrice) || 0;
        const max = Number(this.maxPrice) || Infinity;
        this.$emit('filter-price', { min, max });
      }
    }
  };
  