
if (Meteor.isClient) {
  // This code only runs on the client
  Template.home.helpers({
	  'artworks': function(){
	      return ArtworksList.find();
	  }
  });
}

