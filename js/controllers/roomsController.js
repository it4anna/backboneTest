app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.RoomsController = app.controllers.base.extend({
        render: function () {
            console.log('RoomsController render');
        }
    });
})();
