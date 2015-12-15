if (Meteor.isClient) {
  Template.home.helpers({
    'images': function() {
      return Images.find();
    },
    'artworks': function(){
	      return ArtworksList.find();
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

