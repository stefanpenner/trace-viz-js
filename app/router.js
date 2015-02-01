import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('file', function() {
    this.resource('range', function() {
      this.route('index', { path: ':range_id'});
    });
  });
});

export default Router;
