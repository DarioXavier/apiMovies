(function(){
    'use strict';

    angular
        .module('movieApp',[
            'movieModule',
            'ngRoute'

        ])

        .config(function($routeProvider){

            $routeProvider
                .when('/listaMovies', {
                    templateUrl: 'js/app/movie/movie.html'
                })
                .otherwise({
                    redirectTo:'/'
                })
        });


}());