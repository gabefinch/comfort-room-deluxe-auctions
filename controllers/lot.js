CRDeluxe.LotController = Ember.ObjectController.extend({
  needs: ['auction'],
  showAdd: true,
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
