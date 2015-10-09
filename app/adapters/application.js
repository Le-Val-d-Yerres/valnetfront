import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'localhost:8000',
    namespace: 'api/v1'
});
