new Vue({
  el: "#app",
  data: {
    isActive: {
      1: false,
      2: false,
      3: false,
    },
    borderWhite: false,
  },

  methods: {
    toggleActive(index) {
      this.isActive[index] = !this.isActive[index];
    },
  },
});
