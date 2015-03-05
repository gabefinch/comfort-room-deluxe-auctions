CRDeluxe.NewLotController = Ember.ArrayController.extend({

  needs: ['auction'],
  periods: ['Pre-historic','Antique','Contemporary','Extra-terrestrial'],
  selectedPeriod: 'Contemporary',
  actions: {
    save: function() {

      var newLot = this.store.createRecord('lot', {
        name: this.get('name'),
        period: this.get('selectedPeriod')
      });
      newLot.save();

      this.set('name', "");
      this.set('selectedPeriod', "Contemporary");

      var auction = this.get('controllers.auction.model');
      auction.get('lots').pushObject(newLot);
      auction.save();
    }
  }
});
