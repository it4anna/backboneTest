(function () {
    'use strict';

    app.helper = {
        //'storageName' type is string, 'data' type is array
        localStorageSave: function(storageName, data) {
            localStorage[storageName] = JSON.stringify(data);

            console.log('StorageSet: ',storageName, ' -> ',  data);
        },

        //'storageName' type string, return array
        localStorageRetrieve: function (storageName) {
            console.log('StorageGet: ', storageName, ' -> ', localStorage[storageName] &&  localStorage[storageName].length ? JSON.parse(localStorage[storageName]) : []);


            return localStorage[storageName] &&  localStorage[storageName].length ? JSON.parse(localStorage[storageName]) : [];
        }
    };
})();
