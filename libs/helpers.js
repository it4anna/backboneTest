(function () {
    'use strict';

    app.helper = {
        //'storageName' type is string, 'data' type is array
        localStorageSet: function(storageName, data) {
            localStorage[storageName] = JSON.stringify(data);
        },

        //'storageName' type string, return array
        localStorageGet: function (storageName) {
            return localStorage[storageName] &&  localStorage[storageName].length ? JSON.parse(localStorage[storageName]) : [];
        }
    };
})();
