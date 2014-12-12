angular.module('pledgr.account', [])

.controller('AccountController', function($scope, $http, Account, $stateParams, $window) {
  //Get request for user data.
  var token = $window.localStorage.getItem('token');

  Account.getUserData(token)
    .then(function(userData) {
      $scope.user = userData.data;
    })

  $scope.submit = function(){
    console.log('submitted');
  }

  //Feed user data into scope.
  //on change do a put request on the server.

});
