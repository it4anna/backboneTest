app.collections = app.collections || {};

(function () {
    'use strict';

    app.collections.OfficeList = Backbone.Collection.extend({

        model: app.models.Office,

        // Save all of the office items under the 'office-backbone-Storage' namespace.
        localStorage: new Backbone.LocalStorage('office-backbone-storage'),

        comparator : 'name',

        sortByCountry: function() {
            this.models = _.sortBy(this.models, function(model) {
                return model.get('_embedded').location.country;
            });
        },

        setSelected: function (selectedOfficeId) {
            this.get([selectedOfficeId]).set('isSelected', 'checked');
        },

        getSelected: function () {
            return this.findWhere({isSelected: true});
        }
    });
})();
