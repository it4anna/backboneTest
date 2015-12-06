app.views = app.views || {};

(function () {
    'use strict';

    app.views.OfficeListView = Backbone.View.extend({
        template: _.template('<div>' +
            '<span id="header-label"></span>' +
            '<input type="checkbox" class="pull-right checkbox filter">' +
            '<label class="pull-right"> &darr; </label> ' +
            '<div id="content"></div>' +
            '</div>'),

        events: {
            'change .checkbox': 'onChecked'
        },

        render: function (selectedOfficeId) {
            this.$el.html('');
            this.$el.append(this.template());
            this.renderHeaderLabel(selectedOfficeId);
            this.renderContent();
        },

        renderHeaderLabel: function (currentOfficeId) {
            var selectedOffice = currentOfficeId && this.collection.get(currentOfficeId);

            this.$('#header-label').html('');
            this.$('#header-label').html('Office: ' + (selectedOffice ?  selectedOffice.get('name') : ''));
        },

        renderContent: function () {
            var modelView = {};

            this.$('#content').html('');

            _.each(this.collection.models, function (office) {
                modelView = new app.views.OfficeView({model: office});
                this.$('#content').append(modelView.render().el);
            }, this);
        },

        onChecked: function () {
            if (this.$('.checkbox').is(':checked')){
                this.collection.sortByCountry();
            } else {
                this.collection.sort('name');
            }
        }
    });
})();
