export default Ember.Route.extend({
  model: function(){
    return [
      {id: 1, name: "Report 1"},
      {id: 2, name: "Report 2"},
      {id: 3, name: "Report 3"},
      {id: 4, name: "Report 4"},
      {id: 5, name: "Report 5"}
    ];
  }
});