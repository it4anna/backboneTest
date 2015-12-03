app.collections = app.collections || {};

(function () {
    'use strict';

    app.collections.FloorList = app.collections.BaseList.extend({
        model: app.models.floor,

        // Save all of the office items under the 'floor-backbone-Storage' namespace.
        localStorage: new Backbone.LocalStorage('floor-backbone-storage'),

        initialize: function () {
            this.modelIdsToShow = [];
        },

        comparator : function (a, b) {
            //TODO: compare by rooms numbers and name
            var ra = a.get('labelName'),
                rb = b.get('labelName');

            if (ra === rb) return 0;
            return (ra < rb) ? -1:1;
        },

        setModelsIdToShow: function (id) {
            var models = this.where({officeId: id});
            this.modelIdsToShow = this.pluck('id');
        },

        setSelected: function (selectedFloorIds, value) {
            _.each(selectedFloorIds, function(id){
               // this.models.find(function(model){ if (model.id = id )return model}).set('isSelected', value);
                this.get(id).set('isSelected', false);
            }, this);
        }
    });
})();
