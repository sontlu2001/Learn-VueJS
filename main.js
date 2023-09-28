new Vue({
  el: "#app",
  data: {
    count: 0,
    counter: null,
  },
  methods: {
    getCount: function () {
      return this.count;
    },
    start: function () {
      if (this.count) return;
      this.counter = setInterval(() => {
        this.count++;
      }, 1000);
    },
    stop: function () {
      clearInterval(this.counter);
    },
    isActive: function () {
      return this.count >= 10 ? true : false;
    },
  },
});
