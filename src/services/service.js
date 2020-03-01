export default {

    fetchMovies(){
        return firebase.database().ref('/movies').once('value');
    },
}