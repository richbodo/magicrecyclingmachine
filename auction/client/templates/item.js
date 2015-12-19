Bids = new Mongo.Collection("bids");

if (Meteor.isClient) {
  Template.item.helpers({
    bids: function () {
      return Bids.find({'artId':this._id},{
        sort: { bid: -1 }});
    }
  });
}

Template.item.events({
    "submit .addBid": function (event) {
      event.preventDefault();
      var bid = event.target.bid.value;
      var id = event.target.artId.value;
      console.log(bid)
      console.log(id)
    Bids.insert({
        bid: bid,
        artId: id,
        createdAt: new Date() // current time
      });
    console.log(Bids)
      // Clear form
    event.target.bid.value = "";
    }
});