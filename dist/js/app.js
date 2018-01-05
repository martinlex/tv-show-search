var vm = new Vue({
  el: '#app',
  data: {
    imdbUrl: 'http://www.imdb.com/title/',
    shows: [],
    query: '',
    renderedQuery: ''
  },
  methods: {
    getShows: function(q) {
      axios.get('http://api.tvmaze.com/search/shows?q=' + q)
        .then(response => {this.shows = response.data})
      this.renderedQuery = this.query;
      this.query = '';
    }
  }
});
