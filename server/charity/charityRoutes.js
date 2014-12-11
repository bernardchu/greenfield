var charityController = require('./charityController');

module.exports = function(app) {
  app.get('/category', charityController.sendCategories);
  app.get('/subCategory', charityController.sendSubCategories);
  app.get('/unvetted', charityController.sendUnvetted);
  app.post('/', charityController.register);
  app.get('/:orgid', charityController.fetch);
};
