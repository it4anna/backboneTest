app.collections = app.collections || {};

(function () {
    'use strict';

    app.collections.OfficeList = Backbone.Collection.extend({

        model: app.models.Office,

        // Save all of the office items under the 'office-backbone-Storage' namespace.
        localStorage: new Backbone.LocalStorage('office-backbone-storage'),

        comparator : function (a, b) {
            var ra = a.get('name'),
                rb = b.get('name');

            if (ra === rb) return 0;
            return (ra < rb) ? -1:1;
        },

        sortByCountry: function() {
            this.models = _.sortBy(this.models, function(model) {
                return model.get('_embedded').location.country;
            });
        },

        sortByName: function() {
            this.models = _.sortBy(this.models, function(model) {
                return model.get('name');
            });
        },

        setSelected: function (selectedOfficeId) {
            this.get(selectedOfficeId).set('isSelected', 'checked');
        }
    });
})();
