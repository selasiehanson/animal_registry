export default Ember.ObjectController.extend({
  currentAction: "Edit Breed",
  selectedAnimal: null,
  defaultAnimal: function (){
    var model = this.get('model');
    return model.get('animal');
  }.property("@animals.each"),
  actions: {
    create: function (){
      var self = this;
      var id = self.get('id');

      self.store.find('breed', id).then(function (breed){
        breed.set('name', self.get('name'));
        self.store.find('animal', self.get('defaultAnimal').id).then(function (animal){
          breed.set('animal', animal);
          breed.save().then(function (){
            self.transitionToRoute('breeds');
          });
        });
      });
    }
  }
});