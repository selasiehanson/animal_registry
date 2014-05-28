export default Ember.Route.extend({
  model: function (params){
    return this.store.find('breed',params.breed_id);
  },
  setupController: function (controller, model){
    this._super(controller, model);
    controller.set('animals', this.store.find('animal')) ;
    controller.set('model', model);
  }
});