import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      code: window.require.entries['trace/routes/application'].callback.toString()
    };
  }
});
