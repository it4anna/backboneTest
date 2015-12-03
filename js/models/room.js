app.models = app.models || {};

(function () {
    'use strict';

    // Room Model
    // ----------

    // A basic **Room** model has `name`, `floorId`, 'personsCapacity', 'sequence' attributes.
    app.models.Room = app.models.baseModel.extend({
        name: 'RoomModel'
    });
})();
