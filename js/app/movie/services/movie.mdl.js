(function(){
    'use strict';

    angular
        .module('servicesModule')
        .factory('movieModel', movieModel)

        movieModel.$inject = ['MOVIESLIST', 'GENRESLIST']

        function movieModel(MOVIESLIST, GENRESLIST){

            var moviesList = MOVIESLIST;
            var genresList = GENRESLIST;
            var newList = [];

            estadarizar();
            console.log('genero', genresList);

            function estadarizar(){
                angular.forEach(moviesList, function(movie, index){                   
                    newList.push({titulo: movie.title, genero: getGeneros(movie.genre_ids), score: movie.vote_average});
                });
                console.log("model list", newList);
            }

            function getGenero(idGenre){
                var gender = [];

                angular.forEach(genresList, function(genre, index){
                    if (genre.id==idGenre) {
                        gender = genre.name;
                    }
                });

                return gender;
            }

            function getGeneros(genre_ids){
                var genres = [];

                angular.forEach(genre_ids, function(idGenre, index){
                     genres.push(getGenero(idGenre));
                });

                return genres;
            }


            return {
                newList : newList
            }
        }
}());