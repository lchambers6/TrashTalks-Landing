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

    var FounderInfo = [

        {imageLink:"https://media.licdn.com/dms/image/C4D03AQHQRSCSXG12oQ/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=1iPK7E-jkRxgejW1gj9y-rJ2I4601fZeqj-BikRW8tU"
      ,personName : "Luke Chambers"
      ,personTitle:"Founder"
      ,personDescription:"Luke was trained as an Environmental Engineer at Georgia Tech and has worked in the waste industry for 4 years and as a programmer for two."
      ,iconTypeName : "comment"
      ,funFact : "Luke has been interested in trash since he was 10 years old."
      ,fullBio: "Luke was trained as an Environmental Engineer at Georgia Tech and has worked in the waste industry for 4 years and as a programmer for two. He loves to listen to podcasts, to go rock climbing, playing with his dogs, and eating chocolate. Once prompt about trash, he'll talk your ear off. He truly is our #1 TrashTalker!"
      },

      {imageLink:"https://media.licdn.com/dms/image/C5603AQGl34s5xlSYzw/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=r8lq55ictMWCz6Jc_QWBRkEDTe-RqBNmX9c9YolLLAo"
      ,personName : "Jacqueline Alexander"
      ,personTitle:"Founder - CEO"
      ,personDescription:"Jackie is a current Economics student at Georgia Tech and has been running her own personal training business for 3 years."
      ,iconTypeName : "comment"
      ,funFact : "Jackie has a goal to live to 250 years old."
      ,fullBio: "Jackie is a current Economics student at Georgia Tech and has been running her own personal training business for 3 years. She is very mindful, likes to take naps, constantly thinks of new business ideas, and also loves chocolate. Currently, Jackie is practicing calligraphy and would like to have her own calligraphy business."
      },

      {imageLink:"https://media.licdn.com/dms/image/C5103AQFhOgeXUwXDtA/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=CUpzB0uAbNmCK2SC94kZKPIx1CDRqbGq82VFLzLuxnY"
      ,personName : "Arturo Salmeron"
      ,personTitle:"Founder"
      ,personDescription:"Arturo has a Materials Science degree from Georgia Tech and skills in software development."
      ,iconTypeName : "comment"
      ,funFact : "Arturo loves to cook, rock climb, and sing in the car."
      ,fullBio: "Arturo has a Materials Science & Engineering degree from Georgia Tech and skills in software development. Arturo loves to cook, enjoys rock climbing (bouldering), and really enjoys singing in the car; high notes are not off limits."
      }
    ]
// ---------------------------------------------//


// ---------------   Add to DB   --------------//
  db.Example
  	.remove({})
  	.then(() => db.Example.collection.insertMany(FounderInfo))
  	.then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//--------------------------------------------//

