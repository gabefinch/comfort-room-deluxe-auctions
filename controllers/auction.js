CRDeluxe.AuctionController = Ember.ArrayController.extend({
  actions: {
    addAuction: function() {
      var newAuction = this.store.createRecord('auction', {
        name: this.get('name'),
        auctionDate: this.get('date')
      });
      newAuction.save();
    }
  }
});
