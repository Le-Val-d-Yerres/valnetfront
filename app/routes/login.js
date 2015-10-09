import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function () {

    },
    activate: function () {
        Ember.$('body').toggleClass("login-page");
    },
    deactivate: function () {
        Ember.$('body').toggleClass("login-page");
    }

});
