import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      instrumentations: [
        { range: [ 0 , 10 ] },
        { range: [ 5,   8 ] },
        { range: [ 6,   6 ] },
      ],

      code: window.require.entries['trace/routes/application'].callback.toString()
    };
  }
});
