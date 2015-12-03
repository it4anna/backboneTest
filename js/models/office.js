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
            _embedded: {
                location: {
                    country: 'N/A'
                }
            },
            isSelected: false
        }
    });
})();
