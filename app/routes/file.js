import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      instrumentations: [
        { id: '0..10', range: [ 0 , 10 ] },
        { id: '5..8',  range: [ 5,   8 ] },
        { id: '6..6',  range: [ 6,   6 ] },
      ],

      code: window.require.entries['trace/examples/bar'].callback.toString()
    };
  }
});
