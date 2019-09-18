/**
* @ngdoc directive
* @name dryButlerSupplierWebApp.directive:drcCancelTicket
* @description
* # drcCancelTicket
*/

(function () {
    'use strict';

    var drcAboutMe = function ($controller) {

        var _link = function (scope, elem, attrs, ngModel) {

            //---------------------------------------------------------------------------------- SCOPE & VARIABLES --//
            //-------------------------------------------------------------------------------------------- METHODS --//

            //--------------------------------------------------------------------------------------------- EVENTS --//

            //-------------------------------------------------------------------------------------------- SERVICE --//

            //------------------------------------------------------------------------------------------- WATCHERS --//

        };

        return {
            restrict: 'AE',
            transclude: true,
            templateUrl: 'views/tpls/about-me.html',
            link: _link
        };
    };
    drcAboutMe.$inject = ['$controller'];
    angular.module('myApp')
        .directive('drcAboutMe', drcAboutMe);
})();


