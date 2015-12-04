app.views = app.views || {};

(function () {
    'use strict';

    app.views.RoomView = app.views.baseView.extend({
        onCheckboxClicked: function () {
            var isChecked = this.$('input.oneItem').is(':checked');
            this.model.set('isSelected', isChecked);

            Backbone.Mediator.pub('room:clicked', {roomId: this.model.id, isChecked: isChecked});
        }
    });
})();
