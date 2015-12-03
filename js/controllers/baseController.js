app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.base = Backbone.View.extend({
        initialize: function(data) {
            console.log(data.name, ' init');
            this.render();
        },
        render: function () {
            console.log('controllers.base render');
        }
    });
})();
