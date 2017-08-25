(function(){
    'use strict';

    angular
        .module('controllersModule')
        .controller('movieCtrl', movieCtrl)

        movieCtrl.$inject = ['movieService']

    function movieCtrl(movieService){
        var mvCtrl = this;

        init();

        function init() {

            mvCtrl.movies = movieService.moviesList;
            //console.log(movieService.moviesList);
            
        }


    }

}());