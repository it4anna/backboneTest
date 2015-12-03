app.models = app.models || {};

(function () {
    'use strict';

    app.models.baseModel = Backbone.Model.extend({
        defaults: {
            name: 'noName',
            setLabelName: '',
            isSelected: false
        },

        setLabelName: function () {
        var pattern = /\d+/g,
            result = pattern.exec(this.get('name'));
        this.set('labelName', +result[0]);
    }
    });
})();
