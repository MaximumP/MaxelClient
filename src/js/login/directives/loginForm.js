/**
 * Created by max on 20.10.15.
 */

(function(){

    angular.module('Login')
        .directive('loginForm', function(){
            return {
                restrict: 'E',
                templateUrl: '/templates/login/loginForm.html',
                scope: {},
                controller: function($scope, $http, $log){
                    this.user = {};
                    this.login = function(){
                        $http({
                            method: 'POST',
                            url: '/account/login',
                            data: this.user,
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then(function(data){
                            $log.log(data.data);
                        }, function(data){
                            //TODO: handle error
                        });
                    }
                },
                controllerAs: 'loginCtrl'
            };
        })
})();
