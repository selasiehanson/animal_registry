var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('reports', function (){
    this.route('show', {path: ':report_id'});
  });

  this.resource('animals', function (){
    this.route('new');
    this.route('show', {path: ':animal_id'});
    this.route('edit', {path: ':animal_id/edit'});
  });

  this.resource('events', function (){
    this.route('new');
    this.route('show', {path: ':event_id'});
    this.route('edit', {path: ':event_id/edit'});
  });
  
  this.resource('breeds', function (){
    this.route('new');
    this.route('show', {path: ':breed_id'});
    this.route('edit', {path: ':breed_id/edit'});
  });
});

export default Router;
