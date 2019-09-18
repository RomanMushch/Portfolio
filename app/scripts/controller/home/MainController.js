/**
 * @ngdoc function
 * @name dryButlerSupplierWebApp.controller:HeaderController
 * @description
 * # HeaderController
 * Controller of the dryButlerSupplierWebApp
 */

(function () {
    'use strict';

    var MainController = function ($scope, $controller) {

        //----------------------------------------------------------------------------------------------- BASE --//

        //---------------------------------------------------------------------------------- SCOPE & VARIABLES --//

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
    MainController.$inject = ['$scope', '$controller'];

    angular.module('myApp')
        .controller('MainController', MainController);

})();
