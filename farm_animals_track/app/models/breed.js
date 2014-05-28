export default DS.Model.extend({
  name: DS.attr('string'),
  animal: DS.belongsTo('animal')
});