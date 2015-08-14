angular.module('gdgxCloud', ['ngSanitize', 'ngAria', 'ngAnimate', 'ngMaterial'])
.controller('MainController', function ($rootScope) {
    var mc = this;
    mc.googlePlusLink = 'https://plus.google.com/101890122124026924066';
    $rootScope.canonical = "http://gdgx-cloud.appspot.com";
});
