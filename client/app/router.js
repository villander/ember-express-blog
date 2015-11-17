import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('blog-posts', { path: '/' }, function() {
        this.route('posts-list', { path: '/' });
        this.route('post-edit', { path: 'words/:slug/edit' });
        this.route('post-new', { path: 'words/new' });
        this.route('post-read', { path: 'words/:slug' });
    });
    this.route('about');
    this.route('projects');
    this.route('auth', function() {
        this.route('login');
    });
});

export default Router;
