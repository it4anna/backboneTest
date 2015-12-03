app.views = app.views || {};

(function () {
    'use strict';

    app.views.roomListView = app.views.baseListView.extend({
        template: _.template('<div>' +
            '<span id="header-label"></span>' +
            '<input type="checkbox" class="pull-right checkbox all">' +
            '<label class="floor-label">Check all</label> ' +
            '<div id="content"></div>' +
            '</div>'),

        events: {
            'click .all': 'onAllCheckboxClicked',
            'change .floor': 'onFloorChanged'
        },

        initialize: function() {
            this.collection = new app.collections.FloorList();
            Backbone.Mediator.sub('floor:clicked', this.onFloorClicked, this);
            this.collection.fetch().done(
                function (responce) {

                    var selectedOfficeId = app.helper.localStorageRetrieve('selectedOfficeId')[0],
                        selectedFloors = app.helper.localStorageRetrieve('selectedFloorIdsList');

                    if(selectedFloors && selectedFloors.length) {
                        this.collection.setSelected(selectedFloors, true);
                    }
                    this.render();
                }.bind(this)
            );

            Backbone.Mediator.sub('office:selected', this.onOfficeSelected, this);
        },

        render: function () {
            this.$el.html('');
            this.$el.append(this.template());
            this.renderHeaderLabel();
            this.renderContent();
        },

        renderHeaderLabel: function () {
            this.$('#header-label').html('');
            this.$('#header-label').html('Floors: ' + this.getHeaderData());
        },

        renderContent: function () {
            var modelView = {},
                floor;

            this.$('#content').html('');

            _.each(this.collection.modelIdsToShow, function (id) {
                floor = this.collection.get('id');

                modelView = new app.views.FloorView({model: floor});
                this.$('#content').append(modelView.render().el);
            }, this);
        },

        getHeaderData : function () {
            var selectedFloor = app.helper.localStorageRetrieve('selectedFloorIdsList') || [],
                selectedFloorsNames = [];

            switch (selectedFloor.length) {
                case 0:
                    selectedFloor = '';
                    break;
                case this.collection.modelIdsToShow.length:
                    selectedFloorsNames = 'All';
                    break;
                default:
                    /*                    _.each(selectedFloor, function (id) {
                     // selectedFloorsNames.push(
                     this.collection.setModelsToShow.where({model.id = id}return model.get('labelName');});
                     });*/
                    break;
            }
            return selectedFloorsNames;
        },

        onOfficeSelected: function (selectedOfficeId) {
            var allIds = this.collection.pluck('floorId');
            this.collection.setSelected(allIds, false);

            this.collection.setModelsIdToShow(selectedOfficeId);
            app.helper.localStorageSave('selectedFloorIdsList', []);

            this.renderContent();
        },

        onFloorClicked: function (data) {
            this.$('input.all').prop('checked', this.isAllChecked());
            this.updateSelectedFloorId(data);
            this.renderHeaderLabel();
        },

        onAllCheckboxClicked : function () {
            var isChecked = this.$('input.all').is(':checked'),
                allIds = _.pluck(this.collection.modelsToShow, 'id');

            this.$('.floor').prop('checked', isChecked);
            //update localStorage with all changed
            app.helper.localStorageSave('selectedFloorIdsList', isChecked ? allIds : []);
            this.collection.setSelected(allIds, isChecked);
            this.renderHeaderLabel();
        },

        isAllChecked: function () {
            var floorCheckboxes = $('input[type=\'checkbox\'].floor');

            return floorCheckboxes.length === floorCheckboxes.filter(":checked").length;
        },

        updateSelectedFloorId: function (changedFool) {
            //tmp
            app.helper.localStorageSave('selectedFloorIdsList', [changedFool.id]);
            this.renderHeaderLabel();
        }
    });
})();
