<template>
       <div class="card">
           <router-link :to="movieDetailsPath">
            <img class="card-img-top" :src="posterPath" :alt="movie.original_title">
           </router-link>
            <div class="card-body">
                <h5 class="card-title">{{movie.original_title}}</h5>
                <p class="card-text">{{movie.overview}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Average rating : {{movie.vote_average}}</small>
            </div>
        </div>


       
</template>





<script>
export default {
    props : {
        movie: {
            type: Object,
            required: true,
        }
    },

    computed : {
        posterPath() {
            return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
        },

        movieDetailsPath() {
            return `/movie/${this.movie.id}`
        }
    },
    
    
}
</script>

<style scoped>
    .card {
        max-width: 200px;
        float: left;
    }
</style>