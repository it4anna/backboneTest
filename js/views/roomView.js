app.views = app.views || {};

(function () {
    'use strict';

    app.views.roomView = Backbone.View.extend({
        tagName: 'div',
        initialize: function () {
            console.log('roomView init');
        }
    });
})();
