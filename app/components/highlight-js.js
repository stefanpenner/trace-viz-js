import Ember from 'ember';
import highlight from 'npm:highlightjs';
import lodash from 'npm:lodash';

export default Ember.Component.extend({
  hasLineNumbers: true,
  lineNumbers: Ember.computed('code', function() {
    var length = this.get('code').split('\n').length + 1;

    return lodash.range(1, length);
  }).readOnly(),

  highlighted: Ember.computed('code', 'lang', function() {
    var lang = this.get('lang');
    var code = this.get('code');

    return highlight.highlight(lang, code).value;
  }).readOnly()
});
