import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let parentModel = this.modelFor('rental');
    let result;
     parentModel.forEach(function(obj) {
      if(obj.id==params.rentalhome_id)
      {
        result=obj;
      }
     });
    return result;
  }
});
