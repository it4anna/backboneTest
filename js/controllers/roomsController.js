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

            //data: {floorId: this.model.id, isChecked: isChecked}
            Backbone.Mediator.sub('floor:clicked', this.updateCollection, this);

            //data: {id: this.model.id, isChecked: isChecked}
            Backbone.Mediator.pub('floor:allClicked', this.updateCollectionTotaly);
        },

        updateCollection: function (data) {
            this.collectionView.collection.setFilterColl('floorId', data.floorId, this.collection);
            console.log('rooms collections updated: ', this.collectionView.collection.models);
        },

        updateCollectionTotaly: function () {
            console.log('updateCollectionTotaly: Pls, realize me');
        }
    });
})();
