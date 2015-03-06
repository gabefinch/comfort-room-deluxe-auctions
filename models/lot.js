CRDeluxe.Lot = DS.Model.extend({
  name: DS.attr(),
  period: DS.attr(),
  items: DS.hasMany('item', {async: true}),
  auction: DS.belongsTo('auction', {embedded: true})
});
