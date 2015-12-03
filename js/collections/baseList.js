app.collections = app.collections || {};

(function () {
    'use strict';

    //It needs to define a model attribute into model instance

    app.collections.BaseList = Backbone.Collection.extend({

        comparator : function (a, b) {
            var na = a.get('name'),
                nb = b.get('name');

            if (na === nb) return 0;
            return (na < nb) ? -1:1;
        },

        setSorted: function (sortAttr, ids) {
            var sortedIds = this.where({sortAttr: id});
            this.models = this.pluck('sortedIds');
        },

        setSelected: function (selectedIds, value) {
            _.each(selectedIds, function(id){
                // this.models.find(function(model){ if (model.id = id )return model}).set('isSelected', value);
                this.get(id).set('isSelected', false);
            }, this);
        }
    });
})();
