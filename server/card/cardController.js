var helpers = require('../config/helpers');
var Card = require('./cardModel');
var stripe = require('stripe')("sk_test_WjBhk0wLLvaJp3bO65bozL53");

module.exports = {
  add: function(req, res) {
    var stripeToken = req.body.stripeToken;

    //find customer ID through email
    // stripe.customers.retrieve("Customer ID", function(err, customer) {
    //   if(err) {
  	    //if customer ID does not exist, then create a new customer
  	    stripe.customers.create(
  	    	{
  	      	description: '12345@hackreactor.com'
  	    	}, 
  	    	function(err, customer) {
  	    		if(err) {
  	    			res.send('failed to create customer!');
  	    		}
	  				stripe.customers.createCard(customer.id, {card: stripeToken},
  				  function(err, card) {
  				    if(!err) {   	
			  	      return stripe.charges.create({
			  	        // amount: 1000,
			  	        currency: "usd",
			  	        customer: customer.id
			  	      }, 
			  	      function(err, charge) {
	        	    	var card = new Card({user: req.body.user, customer_id: customer.id});
	            		card.save(function(error) {
	              		if (!error) {
	              			res.send('SUCCESS');
	              		}
	            		});
			  	      });
  				    }
  				});
  	    });
      }
      // else {
      // 	//customer does exist
      // 	//create a new card
      // 	stripe.customers.createCard("Customer ID", {card: stripeToken},
      // 	  function(err, card) {
      	    
      // 	});
      // }
  //   });
    
  // }
};
