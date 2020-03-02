import Vue from 'vue'
import Vuex from 'vuex'
import service from '../services/service';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movieDetails: {},
  },

  // Uygulamanın her yerinde kullanabilmek için mapgetters kullanırız.
  // Kullanacağımız componentte computed kısmına mapgetters ile yazarız.
  getters: {
    movies(state) {
      return state.movies;
    },
  },

  mutations: {
    // state, yukardaki state objesini temsil eder.
    // 2. parametre movies ise snapshot'dan gelen veri.
    setMovies(state, movies){
      state.movies = movies;
    },

    setMovieDetails(state, payload) {
      const { id, data } = payload;
      state.movieDetails[id] = data;
    }

  },
  actions: {
    // context vuex'i simgeliyor diyebiliriz.
    // snapshot firebase objelerini belirtir, bu sayede objenin firebase old. biliriz.
    // snapshot.val() obje olarak almamızı sağlar, firebase yapısı yüzünden.
    fetchMovies(context){
      return service.fetchMovies().then(snapshot => {
        context.commit('setMovies', snapshot.val())
      });
    },

    fetchMovieDetails(context, id){
      return service.fetchMovieDetails(id).then(snapshot => {
        context.commit('setMovieDetails',{id: id, data: snapshot.val()});
      });
    },

  },
  modules: {
  }
})
