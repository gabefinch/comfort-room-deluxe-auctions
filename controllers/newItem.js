CRDeluxe.NewItemController = Ember.ArrayController.extend({
  needs: ['lot'],
  name: "Toilet",
  value: 10000,
  seller: "Anonymous",
  image: "http://",

  actions: {
    save: function() {
      var image = this.get('image');
      if(image==="" || image ==="http://") {
        image = "css/imgs/fancy_toilet_2.jpg";
      }
      var newItem = this.store.createRecord('item', {
        name: this.get('name'),
        seller: this.get('seller'),
        value: this.get('value'),
        image: image
      });

      newItem.save();

      this.set('name', "Toilet");
      this.set('value', 10000);
      this.set('seller', 'anonymous');
      this.set('image', 'http://');

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(newItem);
      lot.save();
      var lotController = this.get('controllers.lot');
      lotController.set('showAdd', true);
      this.transitionTo('lot', lot.id)
    },
    cancel: function() {
      this.set('name', "Toilet");
      this.set('value', 10000);
      this.set('seller', 'Anonymous');
      this.set('image', 'http://');

      var lotController = this.get('controllers.lot');
      lotController.set('showAdd', true);
      var lot = this.get('controllers.lot.model');
      this.transitionTo('lot', lot.id)
    }
  }
});
