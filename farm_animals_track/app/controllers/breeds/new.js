export default Ember.ObjectController.extend({
  animals: function (){
    return this.store.find('animal');
  }.property(),
  actions: {
    create: function (){
      var self = this;      
      var obj = {
        name: this.get('name')        
      };
      var breed = this.store.createRecord('breed', obj);
      var animal_id = this.get('animal_id');
      this.store.find('animal', animal_id).then(function (animal){
        breed.set('animal', animal);
        breed.save().then(function (){
          self.transitionToRoute('breeds');
        });
      });
    }
  }
});