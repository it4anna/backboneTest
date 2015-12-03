app.views = app.views || {};

(function () {
  'use strict';

  app.views.FloorView = Backbone.View.extend({
    tagName: 'div',

    template: _.template(
      '<input type="checkbox" class="floor"<%= isChecked %> data=<%= id %>>' +
      '<label>' +
      '<span><%= name %> Floor</span>' +
      '<span class="pull-right"><img src="/test/images/room.png"></span>' +
      '</label>'),

    events: {
      'click .floor': 'onCheckboxClicked'
    },

    initialize: function () {
      //this.listenTo(this.model, 'change', this.render);
      this.model.setLabelName();
    },

    render: function () {
      var data = {
        id: this.model.get('id'),
        name: this.model.get('labelName'),
        isChecked: this.model.get('isSelected') ? 'checked' : ''
      };

      this.$el.html(this.template(data));
      this.$('.floor').data(this.id);
      return this;
    },

    onCheckboxClicked: function () {
      var isChecked = this.$('input.floor').is(':checked');
      this.model.set('isSelected', isChecked);

      Backbone.Mediator.pub('floor:clicked', {id: this.model.id, isChecked: isChecked});
    }
  });
})();
