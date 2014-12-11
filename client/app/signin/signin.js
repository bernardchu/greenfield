angular.module('pledgr.signin', [])

.controller('SignInController', function($scope, $window, Auth, $state) {
  var token = $window.localStorage.getItem('token');

  $scope.user = {
    username: '',
    password: ''
  };

  Auth.checkToken(token);

  $scope.rejected = false;
  $scope.signin = function() {
    var that = this;
    Auth.signin($scope.user)
      .then(function(tokenObj) {
        $window.localStorage.setItem('token', tokenObj.token);
        $state.go('account');
        //$location.path('/userhome');
      })
      .catch(function(error) {
        that.rejected = true;
        console.error(error);
      });
  };
});
