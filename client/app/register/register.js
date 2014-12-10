angular.module('pledgr.register', [])

.controller('RegisterController', function($scope, $window, Categories) {
  $scope.states = [];
  $scope.charity = {
    name: '',
    city: '',
    state: '',
    zip: 12345,
    email: 'contact@charity.org',
    phone: '(123)456-7890',
    category: '',
    subCategory: '',
  };



  $scope.register = function() {
    // Auth.signup($scope.user)
    // .then(function(token) {
    //     $window.localStorage.setItem('token', token);
    //     // $location.path('/userhome');
    //   })
      // .catch(function(error) {
        // console.error(error);
      // });
  };
});
