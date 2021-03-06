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
      'change .file': function(event, template) {
      var fileName = $('input[name="file-name"]').val();
      var fileArtist = $('input[name="file-artist"]').val();
      var fileDescription = $("textarea").val();
      FS.Utility.eachFile(event, function(file) {
        var fileObj = new FS.File(file);
        fileObj.metadata = {fileName: fileName, fileDescription: fileDescription, fileArtist: fileArtist};
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

