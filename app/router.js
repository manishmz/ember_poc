import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('view-user', {path: "view-user/:user_id"});

  this.route('page_not_found', {
    path: '/*wildcard'
  });
  this.route('ddau');
});

export default Router;
