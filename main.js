new Vue({
  el: "#app",
  data: {
    a: 0,
    b: 0,
  },
  computed: {
    getValueA() {
      console.log("getValueA");
      return this.a;
    },
    getValueB() {
      console.log("getValueB");
      return this.b;
    },
  },
  methods: {
    // getValueA() {
    //   console.log("getValueA");
    //   return this.a;
    // },
    // getValueB() {
    //   console.log("getValueB");
    //   return this.b;
    // },
  },
});
