// This folder will contain the seed file

// ------------Dependencie/Imports --------------//
   var mongoose = require("mongoose");
   var db = require("../models");
// ---------------------------------------------//
  mongoose.Promise = global.Promise;

// --------------Connect to DB------------------//
  mongoose.connect(
  	process.env.MONGODB_URI || "mongodb://localhost/GoVoRep",
  	{
  	  useMongoClient: true
  	}
  );
// ---------------------------------------------//



// ---------------Seed for Testing----------------//

  var userSeed = [
 
  ];
// ---------------------------------------------//


// ---------------   Add to DB   --------------//
  db.Users
  	.remove({})
  	.then(() => db.Users.collection.insertMany(userSeed))
  	.then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//--------------------------------------------//

