var charityController = require('./charityController');

module.exports = function(app) {
  app.get('/:orgid', charityController.fetch);
  app.get('/charity/category'), charityController.sendCategories;
  app.get('/charity/subCategory'), charityController.sendSubCategories;
  app.post('/charity'), charityController.register);
};
