app.models = app.models || {};

(function() {
    'use strict';

    // Office Model
    // ----------

    // A basic **Office** model has `name`, `_embeded` attributes.

    app.models.Office = app.models.baseModel.extend({
        defaults: {
            id: 'N/A',
            name: '',
            isSelected: false
        },

        parse: function(response){
           var nestedModel = response._embedded;
            response.location = new app.models.Location(nestedModel.location);
            response = _.omit(response , '_embedded');

            return response;
        }
    });
})();
