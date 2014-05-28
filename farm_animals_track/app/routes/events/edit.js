export default Ember.Route.extend({
  model: function (params){
    return this.store.find('event',params.event_id);
  },
  setupController: function (controller, model){
    this._super(controller, model);
    controller.set('breeds', this.store.find('breed')) ;
    controller.set('model', model);
  }
});