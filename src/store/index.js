import Vue from 'vue'
import Vuex from 'vuex'
import service from '../services/service';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
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

  },
  actions: {
    // context vuex'i simgeliyor diyebiliriz.
    // snapshot firebase objelerini belirtir, bu sayede objenin firebase old. biliriz.
    fetchMovies(context){
      return service.fetchMovies().then(snapshot => {
        context.commit('setMovies', snapshot.val())
      });
    },
  },
  modules: {
  }
})
