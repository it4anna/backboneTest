app.collections = app.collections || {};

(function () {
    'use strict';

    app.collections.BaseList = Backbone.Collection.extend({

        comparator : 'name',

        setFilterColl: function (sortAttr, ids, collection) {
            var models = [];

            _.each(ids, function(parentId){
                _.each(collection.models,
                    function(model){
                        if (model.get(sortAttr) === parentId){
                            models.push(model);
                        }
                    }, this);
            }, this);

            this.models = models;
            this.length = models.length;
            this.trigger('change');
        },

        getSelected: function () {
            var selectedModels = [];

            _.each(this.models, function(model){
                if (model.get('isSelected') === true ){
                    selectedModels.push(model.id);
                }
            }, this);

            return selectedModels;

        }
    });
})();
