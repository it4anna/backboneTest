app.views = app.views || {};

(function () {
  'use strict';

  app.views.FloorView = app.views.baseView.extend({
    onCheckboxClicked: function () {
      var isChecked = this.$('input.floor').is(':checked');
      this.model.set('isSelected', isChecked);

      Backbone.Mediator.pub('floor:clicked', {floorId: this.model.id, isChecked: isChecked});
    }
  });
})();