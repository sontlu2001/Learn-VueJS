new Vue({
  el: "#app",
  data: {
    firstName: "",
    lastName: "",
    gender: true,
  },
  methods: {
    changeValueInput: function (event) {
      if (event.target.name === "gender") {
        this.gender = event.target.checked;
      }
      this[event.target.name] = event.target.value;
    },
    submit: function () {
      console.log(this.firstName, this.lastName, this.gender);
    },
  },
});
