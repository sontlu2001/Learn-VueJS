new Vue({
  el: "#app",
  data: {
    unitPrice: 1000,
    quantity: 1,
    title: "Calculator",
  },
  methods: {
    calculateTotal() {
      this.title = "Loading...";
      return this.unitPrice * this.quantity;
    },
  },
});
