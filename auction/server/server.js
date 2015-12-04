if (Meteor.isServer) {
  Images.allow({
  'insert': function() {
    return true;
    }
  });
}