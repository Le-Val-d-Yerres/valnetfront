import DS from 'ember-data';

export default DS.Model.extend({
  username : DS.attr('string'),
  password : DS.attr('string'),
  email : DS.attr('email'),
  first_name : DS.attr('first_name'),
  last_name : DS.attr('last_name')
});

