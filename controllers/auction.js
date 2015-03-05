CRDeluxe.AuctionController = Ember.ObjectController.extend({
  showAdd: true,
  actions: {
    lotDelete: function(lot) {
      lot.destroyRecord();
      lot.save();
    },
    toggleAdd: function() {
      this.set('showAdd', !this.get('showAdd'));
      // debugger;
      this.transitionTo('newLot', this.get('id'));
    }
  }
});
