export default Ember.ObjectController.extend({
  currentAction: 'New Event',
  events: ['birth', 'death', 'sale', 'purchase'],
  breeds: function(){
    return this.store.find('breed');
  }.property(),
  actions: {
    create: function (){
      var self = this;      
      var obj = {
        count: this.get('count'),
        name: this.get('name'),
        date: new Date(this.get('date'))             
      };
      
      var _event = this.store.createRecord('event', obj);

      this.store.find('breed', this.get('selectedBreed')).then(function (breed){
        _event.set('breed', breed);
        _event.save().then(function (){
          self.transitionToRoute('events');
        });
      });
    }
  }
});