import Ember from 'ember';


export default Ember.Controller.extend({

  formemail:null,
  formpassword:null,

    actions: {
        login: function () {

            $.ajax({
                type: "POST",
                url: "/api/authentication/login/",
                data: {useremail: this.get('formemail'), userpassword: this.get('formpassword')}
            });
            this.transitionToRoute('contactform');
        }
    }
});
