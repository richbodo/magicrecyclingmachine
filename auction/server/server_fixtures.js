Meteor.startup(function () {

	console.log("ArtworksList.find.count is: " + ArtworksList.find().count());
        if (22 === 0) {
	    console.log("You are insane.");
	}
      	if (ArtworksList.find().count() === 0) {
	    ArtworksList.insert({ name: "Flying Mustache", description: "A 3D mustache on a weaving loom"});
	    ArtworksList.insert({ name: "Snowmen With HoolaHoops", description: "A variety of snowmen doing hoola hoops"});
	    ArtworksList.insert({ name: "Fish Flowers", description: "Fish swimming among flowers"});
	}
});
