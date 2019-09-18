/**
 * @ngdoc service
 * @name yurtWebApp.appConfig
 * @description
 * # appConfig
 * Constant in the yurtWebApp.
 */

(function () {
    var appConfig = {

        Menu: [
            {
                Id: 0, LinkName: '', Link: ''
            },
            {
                Id: 10, LinkName: '', Link: ''
            },
            {
                Id: 20, LinkName: '', Link: ''
            },
            {
                Id: 30, LinkName: '', Link: ''
            }
        ],
        Portfolio: [
            {
                Id: 0, Image: 'https://ticket.gunsel.ua/images/icons/gunsel-logo.png', Title: 'Gunsel Lines', Text: '95% was made by me', Background: '#fff', Link: 'https://ticket.gunsel.ua/'
            },
            {
                Id: 10, Image: 'https://test-cargo.gunsel.ua/images/icons/gunsel_cargo.png', Title: 'Gunsel Cargo', Text: '90% was made by me', Background: '#fff', Link: 'https://test-cargo.gunsel.ua/'
            },
            {
                Id: 0, Image: 'https://test-main.gunsel.ua/images/logo.png', Title: 'Gunsel Main', Text: '95% was made by me', Background: '#fff', Link: 'https://test-main.gunsel.ua/'
            },
            {
                Id: 0, Image: 'https://test-avia.gunsel.ua/images/gunsel_air_cargo.png', Title: 'Gunsel AirCargo', Text: '95% was made by me', Background: '#fff', Link: 'https://test-avia.gunsel.ua/'
            },
        ]
    };

    angular.module('myApp')
        .constant('appConfig', appConfig);
})();

