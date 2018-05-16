//-----   Using Axios for getting/posting to routes ---//
	// import axios from "axios";
//----------------------------------------------------//

// -------- Use the following to get/post ------------//

	// For using the "routes/api" directory (using express and 
	// actions on the front end that require database data), the format will look like:

		// addUser: function(userInfo) {
			//return axios.post("/api/auth/signup",userInfo);
		//},

		//inside the "routes" directory, your "index.js" file will export the entire "api" directory
			// router.use("/api", requiredApiDirectory)

		//inside the "api" directory, your "index.js" file will export individual api's
			// router.use("/user", userRoutes);
			// router.use("/auth",authRoutes);
			// router.use("/bill",billRoutes);

		//inside each individual api file, you will have all your specific routes for performing different tasks
		//example: "/signup" will use model to make a new user. From the model, you have access to a function
		// called "save" which is used inside the "signup.js" file





	// For data required from a 3rd party api that will not interact with the database,
	// make axios grab the data directly from the server 
		//getTweets:function(twitterHandle){
    		//return axios.get("/twitterfeed/"+twitterHandle);
  		//},

