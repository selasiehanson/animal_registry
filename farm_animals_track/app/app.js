import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import plusone from './helpers/plusone';
Ember.Handlebars.registerBoundHelper('plusone', plusone);

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'farm-animals-track', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'farm-animals-track');

export default App;
