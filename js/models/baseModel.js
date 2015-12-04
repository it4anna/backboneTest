app.models = app.models || {};

(function () {
    'use strict';

    app.models.baseModel = Backbone.Model.extend({
        defaults: {
            name: 'noName',
            isSelected: false
        }
    });
})();
