var movie1 = {
    tittle:"The Dark Knight",
    rating:"5",
    hasWatched: true
}
var movie2 = {
    tittle:"The Lord of the Rings",
    rating:"4.5",
    hasWatched: false
}
var movie3 = {
    tittle:"The Matrix",
    rating:"3",
    hasWatched: false
}
var movie4 = {
    tittle:"Fight Club",
    rating:"4",
    hasWatched: true
}
var movie5 = {
    tittle:"Titanic",
    rating:"1",
    hasWatched: true
}



var movies = [movie1, movie2, movie3, movie4, movie5];

movies.forEach(movie => {
    if(movie.hasWatched){
        console.log("You have watched \"" + movie.tittle + "\" - "  + movie.rating + " stars");
    }else{
        console.log("You have not watched \"" + movie.tittle + "\" - " + movie.rating + " stars");
    }
});