angular.module('gdgxCloud')
.config(function ($locationProvider, $mdThemingProvider, $mdIconProvider) {

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
        .primaryPalette('orange')
        .accentPalette('green', {
            'default': 'A700'
        });

    $mdIconProvider.fontSet('fa', 'fontawesome');
});
