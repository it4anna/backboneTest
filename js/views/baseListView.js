app.views = app.views || {};

(function () {
    'use strict';

    app.views.baseListView = Backbone.View.extend({
        template: _.template('<div>' +
            '<span id="header-label"></span>' +
            '<input type="checkbox" class="pull-right checkbox filter">' +
            '<label class="pull-right"> &darr; </label> ' +
            '<div id="content"></div>' +
            '</div>'),

        events: {
            'click .filter': 'onFilterChanged'
        },

        render: function () {
            this.$el.html('');
            this.$el.append(this.template());
            this.renderHeaderLabel({headerName: this.headerName, rooms: this.getModelNames()});
            this.renderContent();

            return this;
        },

        renderHeaderLabel: function (label) {
            this.$('#header-label').html('');
            this.$('#header-label').html(label.headerName + ': ' + label.rooms);
        },

        renderContent: function () {
            var modelView = {};

            this.$('#content').html('');

            _.each(this.collection.models, function (model) {
                modelView = new this.View ({model: model});
                this.$('#content').append(modelView.render().el);
            }, this);
        },

        getModelNames : function () {
            // TODO: make it really base
           /* var selectedFloors = app.helper.localStorageGet('selectedFloorIdsList') || [],
                selectedFloorsNames = [];

            switch (selectedFloors.length) {
                case 0:
                    selectedFloorsNames  = 'None';
                    break;
                case this.collection.length:
                    selectedFloorsNames  =  'All';
                    break;
                default:
                    selectedFloorsNames  =  'Selected IDs';
                    /!*  _.each(selectedFloor, function (id) {
                     // selectedFloorsNames.push(
                     //   this.collection.where({model.id = id}return model.get('labelName');});
                     });*!/
                    break;
            }
            return selectedFloorsNames;*/
        }
    });
})();
