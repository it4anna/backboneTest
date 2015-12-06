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

    var roomsController,
      floorsController,
      officesController;

   //Emulate api
    app.setToBackboneLocalStorage(app.collections.OfficeList, app.jsons.officeList);
    app.setToBackboneLocalStorage(app.collections.FloorList ,app.jsons.floorList);
    app.setToBackboneLocalStorage(app.collections.RoomList ,app.jsons.roomList);

    //TODO: to delete
    var floorIds = [];
    _.each(app.jsons.floorList, function (floor) { floorIds.push(floor.floorId)}, this);

    roomsController = new app.controllers.RoomsController();
    floorsController = new app.controllers.FloorsController();
    officesController = new app.controllers.OfficesController();

});
