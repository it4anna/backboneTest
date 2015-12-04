app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.FloorsController = app.controllers.base.extend({
        initialize: function () {
            this.collection = new app.collections.FloorList();
            this.collectionView = new app.views.FloorListView({el: '#floor-container'});
            this.roomCollection = new app.collections.RoomList();

            this.collection.fetch().done(function () {
                //add storaged models
                /*                _.each(data.floorIds, function (floorId){
                 this.sortedCollView[floorId] =
                 new app.views.RoomListView();
                 this.sortedCollView[floorId].collection.setFilterColl('floorId', floorId, collection);
                 $('#room-container .container').append(this.sortedCollView[floorId].render().$el);
                 }, this);*/

                this.roomCollection.fetch().done(function(){
                    var models = [],
                        i = 0;

                    _.each(this.collection.models, function(floor){
                        //set attribute to adding group style
                        models = [];
                        _.each(this.roomCollection.models,
                            function(model){
                                if (model.get('floorId') === floor.get('floorId')){
                                    models.push(model);
                                    model.set('dataStyle', i);
                                }
                            }, this);

                        floor.set('dataStyle', i);
                        floor.set('roomNumber', models.length);
                        i++;
                    }, this);
                    this.collectionView.render();
                }.bind(this));

            }.bind(this));

            Backbone.Mediator.sub('office:selected', this.updateCollection, this);
        },

        updateCollection: function (officeId) {
            this.collectionView.collection.setFilterColl('officeId', officeId, this.collection);
            console.log('collection updated: ', this.collectionView.collection.models);
        }
    });
})();