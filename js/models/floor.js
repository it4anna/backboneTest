app.models = app.models || {};

(function () {
    'use strict';

    // Floor Model
    // ----------

    // A basic **Floor** model has `name`, `floorId`, 'officeId' attributes.

    app.models.Floor = app.models.baseModel.extend({
        idAttribute: "floorId",

        setLabelName: function () {
            var pattern = /\d+/g,
                result = pattern.exec(this.get('name'));
            this.set('labelName', +result[0]);
        }
    });
})();
