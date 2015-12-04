app.views = app.views || {};

(function () {
    'use strict';

    app.views.baseView = Backbone.View.extend({
        tagName: 'div',

        template: _.template(
            '<div data="<%= dataStyle %>"><input type="checkbox" class="floor">' +
            '<label>' +
            '<span><%= name %></span>' +
            '<% if (additionalData) { %> <span class="pull-right"><%= additionalData %><img src="/test/images/room.png"></span>' +
            '<% } %></label></div>'),

        events: {
            'click .floor': 'onCheckboxClicked'
        },

        render: function () {
            var data = {
                name: this.model.get('labelName') ? this.model.get('labelName') :  this.model.get('name'),
                dataStyle: this.model.get('dataStyle'),
                additionalData: this.model.get('roomNumber') || this.model.get('personsCapacity')
               // isChecked: this.model.get('isSelected') ? 'checked' : ''
            };

            this.$el.html(this.template(data));
            this.$el.data(this.model.get('dataStyle'));
            return this;
        },

        onCheckboxClicked: function () {
            var isChecked = this.$('input.floor').is(':checked');
            this.model.set('isSelected', isChecked);
        }
    });
})();
