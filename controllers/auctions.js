CRDeluxe.AuctionsController = Ember.ArrayController.extend({
  needs: ['lot'],
  image: "",
  actions: {
    addAuction: function() {
      var newAuction = this.store.createRecord('auction', {
        name: this.get('name'),
        auctionDate: this.get('date')
      });
      newAuction.save();
      this.set('name', "");
      this.set('date', "");
    },
    deleteAuction: function(auction) {
      auction.destroyRecord();
    }
  }
});
