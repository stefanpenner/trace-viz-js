import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'instrumentation-gutter'],
  data: Ember.computed('instrumentations', function() {
    return this.get('instrumentations').map(function(instrument) {
      let [ top, height ] = instrument.range;
      let style = `top: ${top}em; height: ${height}em`;

      return {
        style,
        instrument
      };
    });
  }).readOnly()
});
