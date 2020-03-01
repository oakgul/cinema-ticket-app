<template>
    <section>
        <AppHeader />
        <Loader v-if="isLoading" />
        <section class="container mt-5"> 
            <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
        </section>
    </section>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import Loader from '@/components/Loader';
import Movie from '@/components/Movie';
import { mapGetters,} from 'vuex';

export default {
    data() {
        return {
            isLoading : true,
        }
    },

    computed : {
        ...mapGetters([
      'movies',
    ])
    },

    created() {
        this.$store.dispatch('fetchMovies').then(() => {
            this.isLoading = false;
        })
    },

    components : {
        AppHeader,
        Loader,
        Movie,
    },

    
}
</script>