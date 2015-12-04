app.collections = app.collections || {};

(function () {
    'use strict';

    app.collections.FloorList = app.collections.BaseList.extend({
        model: app.models.Floor,

        // Save all of the office items under the 'floor-backbone-Storage' namespace.
        localStorage: new Backbone.LocalStorage('floor-backbone-storage'),

        comparator: function(a, b) {
            a.setLabelName();
            b.setLabelName();

            a = a.get('labelName');
            b = b.get('labelName');
            return a > b ?  1
                : a < b ? -1
                :          0;
        }
    });
})();
