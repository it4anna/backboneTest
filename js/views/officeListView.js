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

        initialize: function() {
            this.collection =  new app.collections.OfficeList();
            this.currentOfficeId = app.helper.localStorageRetrieve('selectedOfficeId');
            Backbone.Mediator.sub('office:selected', this.renderHeaderLabel, this);

            this.collection.fetch().done(function(responce) {
                if(this.currentOfficeId.length) {
                    this.collection.setSelected(this.currentOfficeId);
                }
                this.render();
                this.renderHeaderLabel(this.currentOfficeId);
            }.bind(this));
        },

        render: function () {
            this.$el.html('');
            this.$el.append(this.template());
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
            this.renderContent();
        }
    });
})();
