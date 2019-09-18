/**
 * @ngdoc function
 * @name dryButlerSupplierWebApp.controller:HeaderController
 * @description
 * # HeaderController
 * Controller of the dryButlerSupplierWebApp
 */

(function () {
    'use strict';

    var PortfolioController = function ($scope, $controller, appConfig) {

        //----------------------------------------------------------------------------------------------- BASE --//

        //---------------------------------------------------------------------------------- SCOPE & VARIABLES --//
        $scope.portfolio = appConfig.Portfolio
        //-------------------------------------------------------------------------------------------- METHODS --//

        //--------------------------------------------------------------------------------------------- EVENTS --//

        //-------------------------------------------------------------------------------------------- SERVICE --//


        //------------------------------------------------------------------------------------------- WATCHERS --//
        //Set selected language displayName on selected culture name change

        //---------------------------------------------------------------------------------------------- READY --//
        var onReady = function () {
        }
        //----------------------------------------------------------------------------------------------- INIT --//
        onReady();
    };
    PortfolioController.$inject = ['$scope', '$controller','appConfig'];

    angular.module('myApp')
        .controller('PortfolioController', PortfolioController);

})();
