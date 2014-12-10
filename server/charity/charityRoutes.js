var charityController = require('./charityController');

module.exports = function(app) {
  app.get('/:orgid', charityController.fetch);
  app.get('/charity/category'), charityController.sendCategories('main');
  app.get('/charity/subCategory'), charityController.sendCategories('sub');
  app.post('/charity'), charityController.register);
};
