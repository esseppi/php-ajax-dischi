var app = new Vue({
  el: '#app',
  data: {
    apiUrl: '/../api/api.php',
    albums: [],
  },
  methods: {
    search(event) {
      axios
        .get(`${this.apiUrl}?search=${event.target.value}`)
        .then((response) => (this.albums = response.data));
    },
  },
  created() {
    axios.get(this.apiUrl).then((response) => (this.albums = response.data));
  },
});
