'use strict';

/* Controles */
var queComemosApp = angular.module('queComemosApp', ['ui.router']);

queComemosApp.controller('BienvenidaController', function (RecetasService) {
	
	this.recetas = RecetasService.recetas;

});

queComemosApp.controller('DetalleContreller', function ($stateParams, $state, RecetasService){
	
	this.receta = RecetasService.getRecetaById($stateParams.id);


});


