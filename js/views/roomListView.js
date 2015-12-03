app.views = app.views || {};

(function () {
    'use strict';

    app.views.RoomListView = app.views.baseListView.extend({
        name: 'RoomListView',

        initialize: function () {
            this.collection =  new app.collections.RoomList ();
            this.View = app.views.RoomView;
            this.headerName = 'Room';

            this.listenTo(this.collection, 'change', this.render);
        }
       /* render: function () {
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
                    /!*                    _.each(selectedFloor, function (id) {
                     // selectedFloorsNames.push(
                     this.collection.setModelsToShow.where({model.id = id}return model.get('labelName');});
                     });*!/
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
        }*/
    });
})();
