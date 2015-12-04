app.collections = app.collections || {};

(function () {
    'use strict';

    //It needs to define a model attribute into model instance

    app.collections.BaseList = Backbone.Collection.extend({

        comparator : 'name',

        setFilterColl: function (sortAttr, ids, collection) {
            var sort = {},
                models = [];

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

        setSelected: function (selectedIds, value) {
            _.each(selectedIds, function(id){
                // this.models.find(function(model){ if (model.id = id )return model}).set('isSelected', value);
                this.get(id).set('isSelected', false);
            }, this);
        }
    });
})();
