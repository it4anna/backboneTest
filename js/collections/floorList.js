app.collections = app.collections || {};

(function () {
    'use strict';

    app.collections.FloorList = app.collections.BaseList.extend({
        model: app.models.Floor,

        // Save all of the office items under the 'floor-backbone-Storage' namespace.
        localStorage: new Backbone.LocalStorage('floor-backbone-storage')
    });
})();
