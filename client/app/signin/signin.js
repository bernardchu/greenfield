angular.module('pledgr.signin', [])

.controller('SignInController', function($scope, $window, Auth, $state) {
  var token = $window.localStorage.getItem('token');

  console.log(Auth.checkToken(token));

  $scope.user = {
    username: '',
    password: ''
  };
  //Add auto signin on remember.
  $scope.rejected = false;
  $scope.signin = function() {
    var that = this;
    Auth.signin($scope.user)
      .then(function(tokenObj) {
        console.log('Set token:' , tokenObj.token);
        $window.localStorage.setItem('token', tokenObj.token);
        //$state.go('home');
        //$location.path('/userhome');
      })
      .catch(function(error) {
        that.rejected = true;
        console.error(error);
      });
  };
});
