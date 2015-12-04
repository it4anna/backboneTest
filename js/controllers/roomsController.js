app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.RoomsController = Backbone.View.extend({
        initialize: function () {
            this.collection = new app.collections.RoomList();
            this.collectionView = new app.views.RoomListView({el: '#room-container'});

            this.collection.fetch().done(function () {
                //add storaged models
/*                _.each(data.floorIds, function (floorId){
                    this.sortedCollView[floorId] =
                        new app.views.RoomListView();
                    this.sortedCollView[floorId].collection.setFilterColl('floorId', floorId, collection);
                    $('#room-container .container').append(this.sortedCollView[floorId].render().$el);
                }, this);*/
                this.collectionView.render();
            }.bind(this));

            Backbone.Mediator.sub('floor:clicked', this.onFloorClicked, this);
            Backbone.Mediator.sub('office:clicked', this.onOfficeClicked, this);
        },

        onFloorClicked: function (data) {
            this.collectionView.collection.setFilterColl('floorId', data, this.collection);
        },

        onOfficeClicked: function () {
            this.collectionView.collection.onOfficeClicked('floorId', [], this.collection);
        }
    });
})();
