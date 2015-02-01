import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let instrumentations = Ember.get(this.modelFor('file'), 'instrumentations');
    let instrumentation = instrumentations.findBy('id', params.range_id);

    if (instrumentation === undefined) {
      throw new Error(`Could not find range: ${params.range_id}`);
    }

    return instrumentation;
  }
});
