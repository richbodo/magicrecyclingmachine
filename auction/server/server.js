Bids = new Mongo.Collection("bids");

if (Meteor.isServer) {
  Images.allow({
    'insert': function() {
      return true;
    }
  });
}