app.views = app.views || {};

(function () {
  'use strict';

  app.views.FloorView = app.views.baseView.extend({
    onCheckboxClicked: function () {
      var isChecked = this.$('input.oneItem').is(':checked');
      this.model.set('isSelected', isChecked);

      var currentSelectedIds = app.helper.localStorageGet('selectedFloorIdsList') || [];

      if(isChecked) {
        currentSelectedIds.push(this.model.id);
      } else {
        currentSelectedIds = _.without(currentSelectedIds, this.model.id)
      }

      app.helper.localStorageSet('selectedFloorIdsList', currentSelectedIds);

      Backbone.Mediator.pub('floor:clicked', currentSelectedIds);
    }
  });
})();
