CRDeluxe.AuctionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('auction');
  }
});
