import Ember from 'ember';
import lodash from 'npm:lodash';

export default Ember.Route.extend({
  model(params) {
    let [
      start,
      end
    ] = params.range_id.split(',');

    let instrumentations = Ember.get(this.modelFor('file'), 'instrumentations');
    let instrumentation = lodash.detect(instrumentations, function(instrumentation) {
      let range = instrumentation.range;

      return range[0] == start &&  range[1] == end;
    });

    if (instrumentation === undefined) {
      throw new Error(`Could not find range: ${start}..${end}`);
    }

    return instrumentation;
  }
});
