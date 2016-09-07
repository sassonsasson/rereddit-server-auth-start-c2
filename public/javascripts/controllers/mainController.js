app.controller('MainCtrl', ['$scope', 'posts', 'auth', function($scope, posts, auth){
  $scope.posts = posts.posts;
  $scope.test = "test";
    $scope.register = function () {
  auth.register($scope.user).then(function(){
    $state.go('home');
    });
  };
  
  $scope.saveToken = auth.saveToken;
  $scope.getToken = auth.getToken;
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser;

  $scope.user = {};

  $scope.addPost = function() {
    if ($scope.title === '') { return; }

    posts.create({ 
      title: $scope.title, 
      link: $scope.link
    });

    $scope.title = '';
    $scope.link = '';
  }

  $scope.incrementUpvotes = function(item) {
    posts.upvote(item);
  }
}]);