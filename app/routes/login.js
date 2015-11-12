import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function () {
         $.ajax({
                type: "GET",
                url: "/api/v1/account/crsf_cookie/"
            });
    },
    activate: function () {
        Ember.$('body').toggleClass("login-page");
    },
    deactivate: function () {
        Ember.$('body').toggleClass("login-page");
    },

});
