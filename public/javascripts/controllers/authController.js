app.controller('AuthCtrl', ['$scope','auth', function($scope, auth){
  $scope.user = {};

  $scope.register = function () {
  auth.register($scope.user).then(function(){
    $state.go('home');
    });
  };
  
}])