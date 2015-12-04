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

