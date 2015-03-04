CRDeluxe.LotRoute = Ember.Route.extend({
  model: function(params) {
    // return this.store.find('auction', params.auction_id);
    return this.store.find('lot', params.lot_id);
  }
});
