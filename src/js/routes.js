/**
 * Created by max on 17.10.15.
 */

angular.module('Maxel').config(['$routeProvider',
    function($routeProvider){
        $routeProvider.when('/login', {
            templateUrl: '/templates/login/index.html'
        });
    }]);