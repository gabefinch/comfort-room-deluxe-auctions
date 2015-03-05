CRDeluxe.AuctionController = Ember.ObjectController.extend({
  showAdd: true,
  actions: {
    lotDelete: function(lot) {
      lot.destroyRecord();
      lot.save();
      var auction = this.get('model');
      auction.get('lots').removeObject(lot);
      auction.save();
    },
    toggleAdd: function() {
      this.set('showAdd', !this.get('showAdd'));
      this.transitionTo('newLot', this.get('id'));
    }
  }
});
