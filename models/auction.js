CRDeluxe.Auction = DS.Model.extend({
  name: DS.attr(),
  auctionDate: DS.attr(),

  lots: DS.hasMany('lot', {async: true})
});
