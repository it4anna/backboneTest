app.views = app.views || {};

(function () {
    'use strict';

    app.views.FloorListView = app.views.baseListView.extend({
        name: 'floor',

        initialize: function () {
            this.collection =  new app.collections.FloorList ();
            this.View = app.views.FloorView;
            this.headerName = 'Floor';

            this.listenTo(this.collection, 'change', this.render.bind(this));
        },

        onFilterChanged : function () {
            if (this.$('.filter').is(':checked')){
                this.collection.sort('roomNumber');
            } else {
                this.collection.sort('labelName');
            }
            this.renderContent();
        }
    });
})();
