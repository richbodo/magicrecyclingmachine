Bids = new Mongo.Collection("bids");

if (Meteor.isClient) {
  Template.item.helpers({
    bids: function () {
      var topBidArray = Bids.find({'artId': this._id},{});
      var topBid = 0
      for (var i = 1 ; i <  topBidArray.length ; i ++) {
        if ()
        else if (topBidArray[i].bid > topBidArray[i+1].bid){
          topBid = topBidArray[i].bid
        }
      };
      return topBid
    }
  });
}

Template.item.events({
    "submit .addBid": function (event) {
      event.preventDefault();
      var bid = event.target.bid.value;
      var id = event.target.artId.value;
      var user = Meteor.userId();
    Bids.insert({
        bid: bid,
        artId: id,
        user: user,
        createdAt: new Date() // current time
      });
    console.log(Bids)
      // Clear form
    event.target.bid.value = "";
    }
});