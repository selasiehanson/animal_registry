export default DS.Model.extend({
  name: DS.attr('string'),
  animals: DS.hasMany('animal')
});