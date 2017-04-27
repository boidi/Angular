var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.hideMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    };
    $scope.cache = function(){
      $scope.hideMe = !$scope.hideMe;
    }
});
