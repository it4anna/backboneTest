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

      //we need pub once, before sub, to not clear localStorage after load
      if(!_.isEmpty(this.selectedOfficeId)) {
        Backbone.Mediator.pub('office:selected', this.selectedOfficeId);
      }
      Backbone.Mediator.sub('selected', this.onOfficeSelected, this);

      this.collectionView.collection.fetch().done(function (responce) {
        if (this.selectedOfficeId.length) {
          this.collectionView.collection.setSelected(this.selectedOfficeId[0]);
        }
        this.collectionView.render(this.selectedOfficeId[0]);
      }.bind(this));

    },

    getSelectedFromLocalStorage: function () {
      return app.helper.localStorageGet('selectedOfficeId');
    },

    setSelectedToLocalStorage: function (officeId) {
      app.helper.localStorageSet("selectedOfficeId", officeId);
    },

    onOfficeSelected: function (officeId) {
      app.helper.localStorageSet("selectedOfficeId", officeId);
      app.helper.localStorageSet('selectedFloorIdsList', []);
      app.helper.localStorageSet('selectedRoomIdsList', []);

      Backbone.Mediator.pub('office:selected', [officeId]);
    }
  })
})();
