new Vue({
  el: "#app",
  data: {
    isLoading: false,
    users: [],
  },
  methods: {
    fetchUsers() {
      this.isLoading = true;
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            this.users = data;
          })
          .catch((error) => console.log(error));
      }, 2000);
    },
  },
  watch: {
    users(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isLoading = false;
      }
    },
  },
});
