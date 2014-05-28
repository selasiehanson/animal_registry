export default Ember.ObjectController.extend({
  currentAction: 'New Animal',
  actions: {
    create: function (){
      var self = this;
      var name = this.get('name');
      var obj = {
        name: name
      };
      var animal = this.store.createRecord('animal', obj);
      animal.save().then(function (){
        self.transitionTo('animals');
      });
    }
  }
});