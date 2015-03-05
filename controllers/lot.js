CRDeluxe.LotController = Ember.ObjectController.extend({
  needs: ['auction'],
  showAdd: true,
  actions: {
    toggleAdd: function() {
      this.set('showAdd', !this.get('showAdd'));
      this.transitionTo('newItem', this.get('id'));
    }
  }
});
