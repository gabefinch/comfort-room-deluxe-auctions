CRDeluxe.Item = DS.Model.extend({
  name: DS.attr(),
  value: DS.attr(),
  image: DS.attr(),
  seller: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
