CRDeluxe.LotController = Ember.ObjectController.extend({
  needs: ['auction'],
  showAdd: true,
  keyImage: function() {
    // look inside my items, pull our a random one, return its picture
    var items = this.get('items.firstObject');
    return items;
  }.property(),
  actions: {
    itemDelete: function(item) {
      var lot = this.get('model');
      lot.get('items').removeObject(item);
      lot.save();
      item.destroyRecord();
    },
    toggleAdd: function() {
      this.set('showAdd', !this.get('showAdd'));
      this.transitionTo('newItem', this.get('id'));
    }
  }
});
