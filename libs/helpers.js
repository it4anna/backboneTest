(function () {
    'use strict';

    app.helper = {
        //'storageName' type is string, 'data' type is array or string
        localStorageSet: function(storageName, data) {
            //check type
            data = Array.isArray(data) ? data : [data];
            localStorage[storageName] = JSON.stringify(data);
        },

        //'storageName' type is string, returns array
        localStorageGet: function (storageName) {
            return localStorage[storageName] &&  localStorage[storageName].length ? JSON.parse(localStorage[storageName]) : [];
        }
    };
})();
