import Ember from 'ember';

export default Ember.Route.extend({

    setupController: function (controller,model) {
      this._super(controller, model);
      $.ajax({
            type: "GET",
            url: "/api/v1/account/crsf_cookie/"
         }).then(function(response){
           controller.set('csrf_token',response['csrf_token']);
      });
    },
    activate: function () {
        Ember.$('body').toggleClass("login-page");
    },
    deactivate: function () {
        Ember.$('body').toggleClass("login-page");
    },

});
