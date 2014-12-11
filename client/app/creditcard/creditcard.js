
angular.module('pledgr.creditcard', [])

.controller('CreditCardController', function($scope, $http) {
  Stripe.setPublishableKey("pk_test_d4qfvAGCTfij33GxuvYkZKUl");
  $scope.cards = [];
  $scope.formData = {
    number: "",
    cvc: "",
    expmonth: "",
    expyear: ""
  };
  $scope.addCard = function() {
     var $form = $('#payment-form');
     Stripe.card.createToken($form, 
        function (status, response) {
          if (response.error) {

          } else {
            // response contains id and card, which contains additional card details
            var token = response.id;
            $http({
              url: '/card/add',
              method: "POST",
              data: {user: 'jsakdfj@hackreactor.com', stripeToken: token},
              headers: {'Content-Type': 'application/json'}
            })
            .then(function (res) {
                if(res.data === "SUCCESS") {
                  $scope.cards.push({number: 'Card ending in ' + $scope.formData.number.slice(-4), exp: $scope.formData.expmonth 
                    + '/' + $scope.formData.expyear});
                }
            });

            $form.get(0).reset();
          }
        }
     ); 
  }

});
