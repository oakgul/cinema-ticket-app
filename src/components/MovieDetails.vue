<template>
    <section>
        <Loader v-if="isLoading" />
        <section v-if="hasDetails">
           <BackdropImage :imageName="movie.backdrop_path" />
           <div class="container pt-5">
               <div class="row">
                   <div class="col-sm-4">
                       <Poster :posterName="movie.poster_path" />
                   </div>
                   <div class="col-sm-8 details">
                       <h2>{{movie.title}}</h2>
                       <p>{{movie.overview}}</p>
                       <div>Runtime: {{runtime}}</div>
                       <div>Average Rating: {{movie.vote_average.toFixed(1)}}</div>
                       <div>Production company: {{movie.production_companies[0].name}}</div>
                       <div>Release Date: {{movie.release_date}}</div>
                   </div>
               </div>
               
           </div>
        </section>
    </section>
</template>

<script>
import Loader from '@/components/Loader';
import BackdropImage from '@/components/BackdropImage';
import Poster from '@/components/Poster';

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

        movie() {
            return this.$store.state.movieDetails[this.movieId];
        },

        // calculate movie time.
        runtime() {
            const runtime = this.movie.runtime;
            const hours = Math.floor(runtime / 60);
            const minutes = runtime -(60 * hours);

            return `${hours}h ${minutes}m`;
        },
    },

    components : {
        Loader,
        BackdropImage,
        Poster,
    },
}
</script>

<style scoped>
    .details {
        color: white;
    }
</style>