import Ember from 'ember';


export default Ember.Controller.extend({

  formemail:null,
  formpassword:null,
  csrf_token: null,

    actions: {
        login: function () {

            $.ajax({
                type: "POST",
                url: "/api/v1/account/login/",
                data: {useremail: this.get('formemail'),
                  userpassword: this.get('formpassword'),
                  csrfmiddlewaretoken: this.get('csrf_token')}
            });
            this.transitionToRoute('index');
        }
    }
});
