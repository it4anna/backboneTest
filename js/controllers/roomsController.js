app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.RoomsController = app.controllers.base.extend({
        initialize: function (data) {
            this.sortedCollView = [];
            //create collectionViews for all existing rooms
            data.officeIds.each(function (roomIds) {
                var sortedCollection = new app.collections.RoomList();
                sortedCollection.fetch().done(this.setSorted({sortBy:roomIds}));
                this.sortedCollView[roomIds] = new app.collections.RoomList({colelction: sortedCollection});
            }, this);

            Backbone.Mediator.sub('office:selected', this.onRoomSelected, this);
        },

        onRoomSelected: function (roomIds) {
            this.sortedCollView[roomIds].show();
        },

        render: function () {
            console.log('RoomsController render');
        }
    });
})();
