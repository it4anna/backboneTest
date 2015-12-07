app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.RoomsController = Backbone.View.extend({
        initialize: function () {
            this.collection = new app.collections.RoomList();
            this.collectionView = new app.views.RoomListView({el: '#room-container'});

            //add storaged models
            this.storedRoomIds = app.helper.localStorageGet('selectedRoomIdsList');

            this.collection.fetch().done(function () {
                this.collectionView.render();
                this.collectionView.collection.setFilterColl('officeId', this.storedRoomIds, this.collection);
            }.bind(this));

            Backbone.Mediator.sub('floors:selected', this.onFloorClicked, this);

        },

        onFloorClicked: function (data) {
            this.collectionView.collection.setFilterColl('floorId', data, this.collection);
            this.collectionView.renderContent();
        }
    });
})();
