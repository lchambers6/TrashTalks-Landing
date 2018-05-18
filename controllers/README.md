// The controller folders will contain all the js files that require your models. Example below:



// -------------- Require Database -----------//

	const db = require("../models");

// ------------------------------------------//


// -------------- Export Methods ------------//

	module.exports = {

		create: function(req,res) {
			console.log(req + " at userController.js");
			db.Users
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch (err => res.json(err))
		} // end of create method

	}; // end of module exports

// ------------------------------------------//
