<<<<<<< HEAD
=======
if (Meteor.isClient) {
  Template.home.helpers({
    images: function() {
      return Images.find();
    }
  })

  Template.home.events({
    'change .fileinput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        var fileObj = new FS.File(file);
        Images.insert(fileObj, function (err) {
          console.log(err)
          console.log(fileObj)
          console.log("Insert successful!")
          //If !err, we have inserted new doc with ID fileObj._id, and
          //kicked off the data upload using HTTP
        });
      });
    }
  });
}

Artworks = new Mongo.Collection("artworks");
>>>>>>> 6b692d14600f9d3af1f19a08d9793368edfac67f

if (Meteor.isClient) {
  // This code only runs on the client
  Template.home.helpers({
	  'artworks': function(){
	      return ArtworksList.find();
	  }
  });
}
