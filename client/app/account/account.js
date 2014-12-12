angular.module('pledgr.account', [])

.controller('AccountController', function($scope, $http, Account, $stateParams, $window) {
  //Get request for user data.
  var token = $window.localStorage.getItem('token');

  Account.getUserData(token)
    .then(function(userData) {
      console.log(userData);
    })

  $scope.user =  {
    first:'Brian',
    last:'Zindler',
    username: 'zindlerb@gmail.com',
    password: 'mango1234',
    male: true,
    female: false,
    animals: false,
    arts: false,
    education: true,
    environment: false,
    health: false,
    humanService: false,
    international: false,
    publicBenefit: false,
    religion: false,
    local: false,
    phone: '6306391052',
    code:'',
    pledge: 1
  }

  $scope.submit = function(){
    
  }

  //Feed user data into scope.
  //on change do a put request on the server.

});
