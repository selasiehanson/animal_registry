export default Ember.ObjectController.extend({
  currentAction: 'Edit Animal',
  actions: {
    create: function (){
      var self = this;
      var id = this.get('id');
      var name = this.get('name');

      this.store.find('animal', id).then(function (animal){
        animal.set('name', name);
        animal.save().then(function (){
           self.transitionTo('animals');
        });  
      });
    }
  }
});