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
            'click .filter': 'onFilterChanged',
            'change .one': 'onOneChanged'
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
            var selectedFloor = app.helper.localStorageRetrieve('selectedFloorIdsList') || [],
                selectedFloorsNames = [];

            switch (selectedFloor.length) {
                case 0:
                    return 'None';
                case this.collection.length:
                    return 'All';
                default:
                    return 'Selected IDs going to be here :-)'
                    /*                    _.each(selectedFloor, function (id) {
                     // selectedFloorsNames.push(
                     this.collection.setModelsToShow.where({model.id = id}return model.get('labelName');});
                     });*/
            }
        },

/*        onParentClicked: function (isSelected) {
            isSelected ? this.$el.show() : this.$el.hide();*/


/*            var allIds = this.collection.pluck('floorId');
            this.collection.setSelected(allIds, false);

            this.collection.setModelsIdToShow(selectedOfficeId);
            app.helper.localStorageSave('selectedFloorIdsList', []);

            this.renderContent();
        },

       onFloorClicked: function (data) {
            //update all checkbox
            this.$('input.all').prop('checked', this.isAllChecked());
            this.updateSelectedFloorId(data);
            //update header
            this.renderHeaderLabel();
        },*/

        /*onAllCheckboxClicked : function () {
            var isChecked = this.$('input.all').is(':checked'),
                allIds = _.pluck(this.collection.modelsToShow, 'id');

            this.$('.floor').prop('checked', isChecked);
            //update localStorage with all changed
            app.helper.localStorageSave('selectedFloorIdsList', isChecked ? allIds : []);
            this.collection.setSelected(allIds, isChecked);
            this.renderHeaderLabel();

            Backbone.Mediator.pub(this.name+':allClicked');
            //todo [ids] instead of this.collection.models
            Backbone.Mediator.pub(this.name+':allClicked', {ids: isChecked ? this.collection.models : []});
        },*/

        /*isAllChecked: function () {
            var floorCheckboxes = $('input[type=\'checkbox\'].floor');

            return floorCheckboxes.length === floorCheckboxes.filter(":checked").length;
        },*/

        updateSelectedFloorId: function (changedFool) {
            //tmp
            app.helper.localStorageSave('selectedFloorIdsList', [changedFool.id]);
            this.renderHeaderLabel();
        }
    });
})();
