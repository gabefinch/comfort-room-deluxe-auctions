CRDeluxe.AuctionController = Ember.ObjectController.extend({
  needs: ['lot'],
  showAdd: true,
  actions: {
    pickImage: function(lotSet) {
      var images = [];
      var lotModel = this.get('controllers.lot.model');
      debugger;
      lotModel.get('items').forEach( function(item) {
        images.push(item.image)
      });
      var rand = Math.floor(Math.random() * (images.length));
      lotSet.set('image',images[rand]);
    },
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
