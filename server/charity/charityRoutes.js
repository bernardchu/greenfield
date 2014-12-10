var charityController = require('./charityController');

module.exports = function(app) {
  app.get('/category', charityController.sendCategories);
  app.get('/subCategory', charityController.sendSubCategories);
  app.post('/', charityController.register);
  app.get('/:orgid', charityController.fetch);
};
