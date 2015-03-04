CRDeluxe.AuctionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('auction', params.auction_id);
  }
});
