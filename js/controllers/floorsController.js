app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.FloorsController = app.controllers.base.extend({
        initialize: function () {
            this.collection = new app.collections.FloorList();
            this.collectionView = new app.views.FloorListView({el: '#floor-container'});

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

            Backbone.Mediator.sub('office:selected', this.updateCollection, this);
        },

        updateCollection: function (officeId) {
            this.collectionView.collection.setFilterColl('officeId', officeId, this.collection);
            console.log('collection updated: ', this.collectionView.collection.models);
        }
    });
})();