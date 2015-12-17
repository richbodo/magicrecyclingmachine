if (Meteor.isClient) {
  Template.home.helpers({
    images: function() {
      return Images.find();
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

Artworks = new Mongo.Collection("artworks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    artworks: [
      { name: "Flying Mustache", description: "A 3D mustache on a weaving loom"},
      { name: "Snowmen With HoolaHoops", description: "A variety of snowmen doing hoola hoops"},
      { name: "Fish Flowers", description: "Fish swimming among flowers"}
    ]
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    artworks: function () {
      return Artworks.find({});
    }
  });
}
