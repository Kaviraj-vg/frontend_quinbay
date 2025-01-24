export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true,
      },
      totalItems: {
        type: Number,
        required: true
      },
      itemsPerPage: {
        type: Number,
        required: true
      }
    },
    computed: {
      isLastPage() {
        return this.currentPage * this.itemsPerPage >= this.totalItems;
      }
    },
    methods: {
      changePage(direction) {
        this.$emit('change-page', this.currentPage + direction);
      }
    }
  };



  