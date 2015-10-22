queComemosApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('bienvenida', {
      url: "/",
      templateUrl: "partials/bienvenida.html",
      controller: "BienvenidaController as bienvenidaCtrl"
    })

    .state('verDetalle', {
      url: "/receta/:id",
      templateUrl: "partials/vistaReceta.html",
      controller: "DetalleController as detalleCtrl"
    })

});