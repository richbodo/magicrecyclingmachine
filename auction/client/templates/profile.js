if (Meteor.isClient) {
  Template.profile.helpers({
    findUserArtworkObjects: function() {
      var myBids = Bids.find({'user': Meteor.userId()}).fetch();
      var myArtworkIds = [];
      var myArtworkObjects = [];
      for (var i = 0; i < myBids.length; i++) {
        myArtworkIds.push(myBids[i].artId)
      };

      for (var i = 0; i < myArtworkIds.length; i++) {
        var myArtworkObject = Images.findOne(myArtworkIds[i]);
        myArtworkObjects.push(myArtworkObject.url())
      };
      var uniqueURL = myArtworkObjects.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      return uniqueURL
    }
  })
}
