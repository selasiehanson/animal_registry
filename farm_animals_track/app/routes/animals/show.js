export default Ember.Route.extend({
  model: function (params){
    return this.store.find('animal', params.animal_id); 
  }
});