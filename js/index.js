var app = window.app = {
    setToBackboneLocalStorage: function(Collection, list) {
        var currentList =  new Collection(list);
        _.each(list, function (item) {
            currentList.create(item);
        });
    }
};

$(document).ready(function () {
    'use strict';
    var officeListView,
        floorListView,
        floorController,
        roomListView,
        roomController;

   //Emulate api
    app.setToBackboneLocalStorage(app.collections.OfficeList, app.jsons.officeList);
    app.setToBackboneLocalStorage(app.collections.FloorList ,app.jsons.floorList);
    app.setToBackboneLocalStorage(app.collections.RoomList ,app.jsons.roomList);

    //Create Collections
   // app.collections.officeListInst = new app.collections.OfficeList();
  //  app.collections.floorListInst = new app.collections.FloorList();
  //  app.collections.roomListInst = new app.collections.RoomList();

    //Create Views
    officeListView = new app.views.OfficeListView({el: '#office-container'});
    floorListView = new app.views.FloorListView({el: '#floor-container'});
   // roomListView = new app.views.roomListView({el: '#room-container'});

    var roomsController = new app.controllers.RoomsController({officeIds: ['','']});
});
