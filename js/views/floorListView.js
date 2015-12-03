app.views = app.views || {};

(function () {
    'use strict';

    app.views.FloorListView = app.views.baseListView.extend({
        name: 'FloorListView',

        initialize: function () {
            this.collection =  new app.collections.FloorList ();
            this.View = app.views.FloorView;
            this.headerName = 'Floor';

            this.listenTo(this.collection, 'change', this.render.bind(this));
        }
    });
})();
