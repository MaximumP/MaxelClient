/**
 * Created by max on 20.10.15.
 */
(function(){

    angular.module('FileManager')
        .directive('fileWindow', function(){
            return {
                restrict: 'E',
                templateUrl: '/templates/fileManager/window.html',
                scope: {},
                controller: function($scope){
                    $scope.wm = new Ventus.WindowManager();
                    $scope.path = '/home/max';
                },
                controllerAs: 'windowCtrl',
                link: function(scope, element, attr){
                    scope.wm.createWindow.fromElement(element, {
                        title: scope.path,
                        width: 500,
                        height: 300,
                        x: 670,
                        y: 200
                    }).open();
                }
            };
        });
})();