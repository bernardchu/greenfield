angular.module('pledgr.charityDash', [])

.controller('CharityDashController', function($scope, $window, Charities) {
  Charities.getUnvetted()
    .then(function(charities) {
      $scope.charities = charities;
      console.log(charities);
    });
  // Categories.getCategories()
  //   .then(function(categories) {
  //     $scope.categories = categories;
  //   });

});
