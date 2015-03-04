CRDeluxe.NewLotController = Ember.ArrayController.extend({

  needs: ['auction'],

  actions: {
    save: function() {

      var newLot = this.store.createRecord('lot', {
        name: this.get('name')
      });
      newLot.save();

      var auction = this.get('controllers.auction.model');
      auction.get('lots').pushObject(newLot);
      auction.save();
    }
  }
});
