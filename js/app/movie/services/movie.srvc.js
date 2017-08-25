(function(){
    'use strict';

    angular
        .module('servicesModule')
        .factory('movieService', movieService)

        function movieService(){
            
            var moviesList = [
                {titulo:'Movie 1' , genero:'drama', score:'1', fechaEstreno:'02/01/2007', duracion:'120'},
                {titulo:'Movie 2' , genero:'comedia', score:'2', fechaEstreno:'12/10/2008', duracion:'121'},
                {titulo:'Movie 3' , genero:'acción', score:'3', fechaEstreno:'22/02/2009', duracion:'122'},
                {titulo:'Movie 4' , genero:'terror', score:'4', fechaEstreno:'03/03/2004', duracion:'123'},
                {titulo:'Movie 5' , genero:'comedia', score:'5', fechaEstreno:'13/11/2011', duracion:'130'},
                {titulo:'Movie 6' , genero:'animación', score:'1', fechaEstreno:'30/12/2000', duracion:'130'},
                {titulo:'Movie 8' , genero:'drama', score:'5', fechaEstreno:'01/02/2015', duracion:'140'},
                {titulo:'Movie 9' , genero:'animación', score:'2', fechaEstreno:'15/05/2001', duracion:'100'},
                {titulo:'Movie 10' , genero:'acción', score:'4', fechaEstreno:'23/06/2006', duracion:'90'},
                {titulo:'Movie 11' , genero:'terror', score:'3', fechaEstreno:'07/07/2005', duracion:'110'},
                {titulo:'Movie 12' , genero:'animación', score:'2', fechaEstreno:'11/09/1999', duracion:'190'},
                {titulo:'Movie 13' , genero:'acción', score:'3', fechaEstreno:'19/10/2003', duracion:'99'},
                {titulo:'Movie 14' , genero:'comedia', score:'4', fechaEstreno:'25/04/2013', duracion:'72'}
            ];


            return {
                moviesList : moviesList
            }
        }
}());