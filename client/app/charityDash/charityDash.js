angular.module('pledgr.charityDash', [])

.controller('CharityDashController', function($scope, $window, Charities) {
  Charities.getUnvetted()
    .then(function(charities) {
      charities.forEach(function(charity) {
        charity.phoneNum = '+' + charity.phone.replace(/\D/g,'');
      });
      $scope.charities = charities;
    });
});
