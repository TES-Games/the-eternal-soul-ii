(function (App) {
  var main = new App.Main({
    data: App.gameData,
    inputField: "input-box"
  });
  var user = new App.User();
  var data = new App.Data();
  var game = new App.Game();
  var locations = new App.Locations();
  var inventory = new App.Inventory();
  
  main.setPlayer(user);
  main.setLocations(locations);
  main.setInventory(inventory);
  main.setData(data);
  main.setSession(game)
    .run();
}(window));
