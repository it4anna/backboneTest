app.controllers = app.controllers || {};

(function () {
    'use strict';

    app.controllers.FloorsController = Backbone.View.extend({
        initialize: function () {
            this.collection = new app.collections.FloorList();
            //It needs to set 'roomNumber' Attr
            this.roomCollection = new app.collections.RoomList();
            this.collectionView = new app.views.FloorListView({
                el: '#floor-container',
                collection: this.collection
            });
            this.selectedFloorIds = app.helper.localStorageGet('selectedFloorIdsList');
            //we need pub once, before sub, to not clear localStorage after load
            if(!_.isEmpty(this.selectedFloorIds)) {
                Backbone.Mediator.pub('floors:selected', this.selectedFloorIds, this);
            }

            this.collection.fetch().done(function () {
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
                }.bind(this));
                this.collectionView.render();
            }.bind(this));

            Backbone.Mediator.subscribeOnce('office:selected', function (selectedOfficeId) {
                var selectedFloorsIds = this.getSelectedFromLocalStorage();
                if(!_.isEmpty(selectedFloorsIds)) Backbone.Mediator.pub('floors:selected', selectedFloorsIds);

                this.updateCollection(selectedOfficeId);
                this.collectionView.collection.setSelected(selectedFloorsIds);

                Backbone.Mediator.subscribe('office:selected', this.updateCollection, this);
            }, this);
        },

        updateCollection: function (selectedOfficeId) {
            this.collectionView.collection.setFilterColl('officeId', selectedOfficeId, this.collection);
            this.collectionView.render();
        },


        getSelectedFromLocalStorage: function () {
            return app.helper.localStorageGet('selectedFloorIdsList');
        },

        setSelectedToLocalStorage: function (officeId) {
            app.helper.localStorageSet("selectedFloorIdsList", officeId);
        }
    });
})();
