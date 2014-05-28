export default DS.Model.extend({
  name: DS.attr('string'),
  count: DS.attr('number'),
  date: DS.attr('date'),
  breed: DS.belongsTo('breed')
});