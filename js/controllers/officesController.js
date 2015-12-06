app.controllers = app.controllers || {};

(function () {
  'use strict';

  app.controllers.OfficesController = Backbone.View.extend({
    initialize: function () {
      this.collection = new app.collections.OfficeList();
      this.collectionView = new app.views.OfficeListView({
        el: '#office-container',
        collection: this.collection
      });
      this.selectedOfficeId = this.getSelectedFromLocalStorage();

      if(this.selectedOfficeId) {
        Backbone.Mediator.pub('office:selected', this.onOfficeSelected);
        console.log('OfficeSelected: ', this.selectedOfficeId);
      }

      this.collectionView.collection.fetch().done(function (responce) {
        if (this.selectedOfficeId.length) {
          this.collectionView.collection.setSelected(this.selectedOfficeId[0]);
        }
        this.collectionView.render(this.selectedOfficeId[0]);
      }.bind(this));

      Backbone.Mediator.sub('office:selected', this.onOfficeSelected, this);
    },

    getSelectedFromLocalStorage: function () {
      return app.helper.localStorageGet('selectedOfficeId');
    },

    setSelectedToLocalStorage: function (officeId) {
      app.helper.localStorageSet("selectedOfficeId", officeId);
    },

    onOfficeSelected: function (officeId) {
      console.log('OfficeSelected: ', officeId);
      app.helper.localStorageSet("selectedOfficeId", officeId);
      app.helper.localStorageSet('selectedFloorIdsList', []);
      app.helper.localStorageSet('selectedRoomIdsList', []);
    }
  })
})();
