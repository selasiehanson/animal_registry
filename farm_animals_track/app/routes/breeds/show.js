export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('breed', params.breed_id);
  }
});
