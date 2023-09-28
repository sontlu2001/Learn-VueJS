new Vue({
  el: "#app",
  data: {
    count: 0,
    counter: null,
    elementStop: "<button>stop</button>",
    elementReset: "<button>reset</button>",
    isActive: false,
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
      this.isActive = true;
    },
    stop: function () {
      clearInterval(this.counter);
    },
    reset: function () {
      this.stop();
      this.count = 0;
      this.isActive = false;
    },
  },
});
