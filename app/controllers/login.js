import Ember from 'ember';


export default Ember.Controller.extend({

  formemail: null,
  formpassword: null,
  csrf_token: null,
  status: null,
  alert: null,
  alert_mode: null,
  alert_icon: null,


  actions: {
    login: function () {
      var self = this;
      $.ajax({
        type: "POST",
        url: "/api/v1/account/login/",
        data: {
          useremail: this.get('formemail'),
          userpassword: this.get('formpassword'),
          csrfmiddlewaretoken: this.get('csrf_token')
        },
        success: function (response) {
          var message = response['message'];
          var msgtxt = message['msg'];
          var msgstatus = message['status'];
          var msgto = message['to'];
          if (msgstatus == "ok") {
            self.set('alert', msgtxt);
            self.set('alert_mode', "alert-success");
            self.set('alert_icon', "fa-refresh fa-spin");
            self.transitionToRoute('dashboard');

          }
           if (msgstatus == "error") {
            self.set('alert', msgtxt);
            self.set('alert_mode', "alert-error");
            self.set('alert_icon', "fa-ban");
          }

        },

        error: function (response) {
          console.log(response.status);
          if (response.status == 403) {

          }
          self.transitionToRoute('index');
        },
      });
    }
  },

});
