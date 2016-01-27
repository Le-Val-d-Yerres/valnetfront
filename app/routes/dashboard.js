import Ember from 'ember';

export default Ember.Route.extend({

    activate: function () {
        Ember.$('body').toggleClass("skin-blue");
        Ember.$('body').toggleClass("sidebar-mini");
        Ember.$('body').toggleClass("wysihtml5-supported");
    },
    deactivate: function () {
        Ember.$('body').toggleClass("skin-blue");
        Ember.$('body').toggleClass("sidebar-mini");
        Ember.$('body').toggleClass("wysihtml5-supported");
    },
});
