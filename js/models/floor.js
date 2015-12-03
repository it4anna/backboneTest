app.models = app.models || {};

(function () {
    'use strict';

    // Floor Model
    // ----------

    // A basic **Floor** model has `name`, `floorId`, 'officeId' attributes.

    app.models.floor = app.models.baseModel.extend({
        idAttribute: "floorId"
    });
})();
