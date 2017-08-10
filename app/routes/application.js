import Ember from 'ember';

const {
  inject,
  Route
} = Ember;

export default Route.extend({
  translationsFetcher: inject.service(),

  beforeModel: function() {
    return this.get('translationsFetcher').fetch();
  }
});
