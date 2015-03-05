CRDeluxe.NewItemController = Ember.ArrayController.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        name: this.get('name'),
        value: this.get('value')
      });
      newItem.save();

      this.set('name', "");
      this.set('value', "");

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(newItem);
      lot.save();
    }
  }
});
