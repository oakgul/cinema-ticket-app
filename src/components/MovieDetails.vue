<template>
    <section>
        <Loader v-if="isLoading" />
        <section v-if="hasDetails">
            Hello Details..
        </section>
    </section>
</template>

<script>
import Loader from '@/components/Loader';

export default {
    data() {
        return {
            hasDetails : false,
            isLoading : true,
        }
    },

    created() {
        this.$store.dispatch('fetchMovieDetails', this.movieId).then(() =>{
            this.isLoading = false;
            this.hasDetails = true;
        });
    },

    computed : {
        movieId() {
            return this.$route.params.id;
        },

        details() {
            return this.$store.state.movieDetails[this.movieId];
        },
    },

    components : {
        Loader,
    },
}
</script>