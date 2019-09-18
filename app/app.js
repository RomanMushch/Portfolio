'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ui.router'
]).
config(['$locationProvider','$urlRouterProvider', '$stateProvider', function($locationProvider, $urlRouterProvider, $stateProvider) {
    $stateProvider
    //-- Home --------------------------------------------
        .state('base', {
            url: '',
            views: {
                'header': {
                    controller: 'HeaderController',
                    templateUrl: 'views/shared/header.html'
                },
                'main': {
                    controller: '',
                    templateUrl: 'views/outsite/_layout.html'
                }
            }
        })
        .state('base.main', {
            url: '/',
            views: {
                'subview2': {
                    controller: 'MainController',
                    templateUrl: 'views/main/main.html'
                }
            }
        })
        .state('base.portfolio', {
            url: '/portfolio',
            views: {
                'subview2': {
                    controller: 'PortfolioController',
                    templateUrl: 'views/portfolio/portfolio.html'
                }
            }
        })
        .state('base.about', {
            url: '/about',
            views: {
                'subview2': {
                    controller: 'AboutController',
                    templateUrl: 'views/about/about.html'
                }
            }
        })
        .state('base.contacts', {
            url: '/contacts',
            views: {
                'subview2': {
                    controller: 'ContactsController',
                    templateUrl: 'views/contacts/contacts.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}]);
