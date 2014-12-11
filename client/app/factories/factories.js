angular.module('pledgr.factories', [])

.factory('Account', function($http) {
  var getUserData = function(token) {
    return $http({
      method: 'GET',
      url: '/api/users/account',
      headers: {
        'x-access-token': token
      }
    })
    .then(function(data) {
      return data
    });
  };

  return {
    getUserData: getUserData
  }
})

.factory('Auth', function($http, $state) {
  var signup = function(data) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: data
    })
    .then(function(resp) {
      return resp.data.token;
    });
  };

  var checkToken = function(token) {
    return $http({
      method: 'POST',
      url: '/api/users/signedin',
      data: {token: token}
    })
    .then(function(resp) {
      if(resp.status === 200) {
        $state.go('account');
      }
    });
  };

  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function(resp) {
      return resp.data;
      // return resp.data.token;
    });
  };

  return {
    signup: signup,
    signin: signin,
    checkToken: checkToken
  };
})

.factory('SMS', function($http) {
  var sendCode = function(data) {
    return $http({
      method: 'POST',
      url: '/api/sms/send',
      data: data
    })
    .then(function(resp) {
      return resp.data.sent;
    });
  };

  var verifyCode = function(data) {
    return $http({
      method: 'POST',
      url: '/api/sms/verify',
      data: data
    })
    .then(function(resp) {
      return resp.data.found;
    });
  };

  return {
    sendCode: sendCode,
    verifyCode: verifyCode
  };
})

.factory('Categories', function($http) {
  var getCategories = function() {
    return $http({
      method: 'GET',
      url: '/api/charity/category'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var getSubCategories = function() {
    return $http({
      method: 'GET',
      url: '/api/charity/subCategory'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    getCategories: getCategories,
    getSubCategories: getSubCategories
  };
})

.factory('Charities', function($http) {
  var register = function(data) {
    return $http({
      method: 'POST',
      url: '/api/charity',
      data: data
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    register: register
  };
});
