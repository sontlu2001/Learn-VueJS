new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  methods: {
    getCount: function () {
      return this.count;
    },
    increment: function () {
      this.count++;
    },
  },
});
