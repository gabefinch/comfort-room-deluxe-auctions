CRDeluxe.LotController = Ember.ObjectController.extend({
  needs: ['auction'],
  showAdd: true,
  actions: {
    itemDelete: function(item) {
      item.destroyRecord();
      item.save();
    },
    toggleAdd: function() {
      this.set('showAdd', !this.get('showAdd'));
      this.transitionTo('newItem', this.get('id'));
    }
  }
});
