<template>
       <div class="card">
           <router-link :to="movieDetailsPath">
            <Poster class="card-img-top" :posterName="movie.poster_path" :alt="movie.original_title"/>
           </router-link>
            <div class="card-body">
                <h5 class="card-title">{{movie.original_title}}</h5>
                <p class="card-text">{{movie.overview}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Average rating : {{movie.vote_average.toFixed(1)}}</small>
            </div>
        </div>


       
</template>





<script>
import Poster from '@/components/Poster';

export default {
    props : {
        movie: {
            type: Object,
            required: true,
        }
    },

    computed : {
        movieDetailsPath() {
            return `/movie/${this.movie.id}`
        }
    },

    components: {
        Poster,
    },
}
</script>

<style scoped>
    .card {
        max-width: 200px;
        float: left;
    }
</style>