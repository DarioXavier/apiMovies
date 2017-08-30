(function(){
    'use strict';

    angular
        .module('servicesModule')
        .factory('movieService', movieService)

        movieService.$inject = ['movieModel']

        function movieService(movieModel){
            
            var moviesList = movieModel.newList;
            console.log('factory list ', moviesList);


            return {
                moviesList : moviesList
            }
        }
}());