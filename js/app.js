(function (App) {
  var main = new App.Main({
    data: App.gameData,
    inputField: "input-box",
    inventoryButton: "inventory-button",
    newDayButton: "new-day-button"
  });
  var user = new App.User();
  var data = new App.Data();
  var game = new App.Game();
  var inventory = new App.Inventory();
  
  main.setPlayer(user);
  main.setInventory(inventory);
  main.setData(data);
  main.setSession(game)
    .run();
}(window));
