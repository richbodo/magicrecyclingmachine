Bids = new Mongo.Collection("bids");

if (Meteor.isClient) {
  Template.item.helpers({
    findTopBid: function () {
      return Bids.findOne({'artId': this._id}, {sort: {createdAt: -1}}).bid;
      // return Bids.find({},{limit: 1, sort: {bid: -1}}).fetch()[0].bid
    }
  });
}

Template.item.events({
    "submit .addBid": function (event) {
      event.preventDefault();
      var bid = event.target.bid.value;
      var id = event.target.artId.value;
      var user = Meteor.userId();

      if (Bids.findOne({'artId': this._id}, {sort: {createdAt: -1}}) === undefined) {
        Bids.insert({
            bid: bid,
            artId: id,
            user: user,
            createdAt: new Date() // current time
          })
      }
      else if(Bids.findOne({'artId': this._id}, {sort: {createdAt: -1}}).bid > bid) {
        alert("Enter a higher bid!")
      }
      else {
        Bids.insert({
            bid: bid,
            artId: id,
            user: user,
            createdAt: new Date() // current time
          });
      }
      // Clear form
    event.target.bid.value = "";
    }
});

if (Meteor.isServer) {
  Meteor.methods
   ({
     getCurrentTime: function (){
      console.log('on server, getCurrentTime called');
      return new Date();
     }
  });
 }