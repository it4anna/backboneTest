app.views = app.views || {};

(function () {
    'use strict';

    app.views.OfficeView = Backbone.View.extend({
        tagName: 'div',

        template: _.template(
            '<input type="radio" name="office"/ <%= isSelected %>>' +
            '<label>' +
                '<span><%= name %></span>' +
                '<span class="pull-right"><%= country %><img src="/test/images/globe.png"></span>' +
            '</label>'),

        events: {
            'click input': 'onSelected'
        },

        render: function() {
            var data = {
                id: this.model.get('id'),
                name: this.model.get('name'),
                country:  this.model.get('_embedded').location.country,
                isSelected: this.model.get('isSelected')
            };

            this.$el.html(this.template(data));
            return this;
        },

        onSelected: function () {
            this.model.set('isSelected', 'checked');

            Backbone.Mediator.pub('office:selected', this.model.id);
        }
    });
})();
