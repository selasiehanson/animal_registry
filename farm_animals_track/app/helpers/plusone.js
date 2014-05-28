export
default
function(value) {
  if (typeof(value) === 'number') {
    return parseInt(value) + 1 + '.';
  }
  return '';
}

// export
// default Ember.Handlebars.makeBoundHelper(function(value, options) {
//   if (typeof(value) === 'number') {
//     return parseInt(value) + 1;
//   }
//   return ""
// });