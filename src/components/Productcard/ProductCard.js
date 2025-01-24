export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods:{
      props: {
        product: Object,
      },
      viewProduct() {
        this.$router.push(`/product/${this.product.name}`);
      }
    }
  };
  