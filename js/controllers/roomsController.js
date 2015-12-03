app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.RoomsController = app.controllers.base.extend({
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

            Backbone.Mediator.sub('floor:selected', this.updateCollection, this);
        },

        updateCollection: function (floorId) {
            this.collectionView.collection.setFilterColl('floorId', floorId, this.collection);
            console.log('updateCollection with args: ', agruments);
        }
    });
})();
