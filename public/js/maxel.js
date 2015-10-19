/**
 * Created by max on 17.10.15.
 */

angular.module('Maxel', ['ngRoute']);
/**
 * Created by max on 17.10.15.
 */

angular.module('Maxel').config(['$routeProvider',
    function($routeProvider){
        $routeProvider.when('/login', {
            templateUrl: '/templates/login/index.html'
        });
    }]);
/**
 * Created by max on 19.10.15.
 */

angular.module('Maxel')
    .controller('LoginController', function(){
        this.me = test;
        this.ssh = loginDetails;
        this. login = function(){
            console.log(this.ssh);
        }
    });

var loginDetails = {
    host: '',
    user: '',
    password: ''
};

var test = {
    name: 'Max',
    surName: 'Schumann'
};