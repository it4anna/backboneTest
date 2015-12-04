app.views = app.views || {};

(function () {
    'use strict';

    app.views.RoomListView = app.views.baseListView.extend({
        name: 'RoomListView',

        initialize: function () {
            this.collection =  new app.collections.RoomList ();
            this.View = app.views.RoomView;
            this.headerName = 'Room';

            this.listenTo(this.collection, 'change', this.render.bind(this));
        },

        onFilterChanged : function () {
            if (this.$('.filter').is(':checked')){
                this.collection.sort('personsCapacity');
            } else {
                this.collection.sort('labelName');
            }
            this.renderContent();
        }
    });
})();
