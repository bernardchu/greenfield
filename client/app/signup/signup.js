/*
  test user
  {
    first:'Brian',
    last:'Zindler',
    username: 'zindlerb',
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
    pledge: 0.01
  }

  $scope.user = {
    first:'',
    last:'',
    username: '',
    password: '',
    male: false,
    female: false,
    animals: false,
    arts: false,
    education: false,
    environment: false,
    health: false,
    humanService: false,
    international: false,
    publicBenefit: false,
    religion: false,
    local: false,
    phone: '',
    code:'',
    pledge: 0.00
  };
*/

angular.module('pledgr.signup', [])

.controller('SignupController', function($scope, $window, Auth, SMS) {
  $scope.user =  {
    first:'Brian',
    last:'Zindler',
    username: 'zindlerb',
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
    pledge: 0.01
  }

  $scope.invalid = true;

  $scope.signup = function() {
    Auth.signup($scope.user)
    // .then(function(token) {
    //     $window.localStorage.setItem('token', token);
    //     // $location.path('/userhome');
    //   })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.sendCode = function() {
    var phone = $scope.user.phone.match(/\d/g).join('');
    SMS.sendCode({
      phone: phone
    })
    .then(function(sent) {
      if (!sent) {
        console.error('Error sending message. Please try again later.');
      }
    });
  };

  $scope.verifyCode = function() {
    var phone = $scope.user.phone.match(/\d/g).join('');
    SMS.verifyCode({
      phone: phone,
      code: $scope.user.code
    })
    .then(function(found) {
      if (found) {
        console.log('Code found');
        $scope.invalid = false;
        $('#verify').$invalid = false;
      } else {
        console.log('Code not found');
        $('#verify').$invalid = true;
        $scope.invalid = true;
      }
    });
  };
});
