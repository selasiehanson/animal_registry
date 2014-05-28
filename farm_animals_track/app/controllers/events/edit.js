export default Ember.ObjectController.extend({
  currentAction: 'Edit Event',
  events: ['birth', 'death', 'sale', 'purchase'],
  selectedEvent: null,
  selectedBreed: null,
  defaultBreed: function (){
    var model = this.get('model');
    return model.get('breed');
  }.property('@breeds.each'),
  actions: {
    create: function (){
      var self = this;
      var id = this.get('id');
      
      this.store.find('event', id).then(function (_event){
        _event.set('name', self.get('name'));
        _event.set('count', self.get('count'));
        _event.set('date', new Date(self.get('date')));

        //for some reason selection binding is not working
        console.log(self.get('selectedBreed'))

        //resolved to use value binding instead
        var breedId = self.get('defaultBreed').id;

        self.store.find('breed', breedId).then(function (breed){
          _event.set('breed', breed);
          _event.save().then(function (){
            self.transitionToRoute('events');
          });
        });
      });
    }
  }
});