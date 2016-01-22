if (Meteor.isClient) {
  Template.profile.helpers({
    findUserBids: function() {
      return Bids.find({'user': Meteor.userId()}).fetch()
      // return Bids.find()
    }
  })
}
