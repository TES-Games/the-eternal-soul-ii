(function (w) {
	// Private - Not attached to w[indow]
	function isLocation(context) {
		return context instanceof Location;
	}

	// Public - Attached to w[indow]
	if (!w.Locations) {
		function Locations() { // jshint ignore: line
		}

		Locations.prototype = Object.create(null);
		Locations.prototype.constructor = Locations;

		Locations.isLocations =  function (context) {
			return context instanceof Locations;
		};

		Locations.prototype.displayAvailableMoves = function () {
			var str = "",
			colors = ["red", "green", "yellow", "blue", "orange"],
			letters = ["A", "B", "C", "D", "E", "F"],
			i = 0;
			for (i; i < arguments.length; i += 1) {
				str += "<span style='color:" + colors[i] + "'>" + letters[i] + "</span> | " + arguments[i] + " ";
			}

			Main.prototype.displayContent(str);
		};

		Locations.prototype.dragonsbane = function (player) {
			if (arguments.length < 1) {
				Main.prototype.displayContent("Welcome back adventurer to Dragonsbane!");
			} else {
				Main.prototype.displayContent("Welcome to Dragonsbane, " + player.getUserName());
			}
			this.displayAvailableMoves("Leave town.", "Go to shop.", "Visit Tavern", "History of Dragonsbane");
			console.log("Currently in Dragonsbane");
		};

		Locations.prototype.dragonsbaneTavern = function () {
			Main.prototype.displayContent("Welcome to the Greasy Spoon Tavern!");
			this.displayAvailableMoves("Talk to bartender.", "Start bar fight.", "Leave tavern");
			console.log("Currently in the Greasy Spoon");
		};

		Locations.prototype.dragonsbaneTavernBartender = function () {
			Main.prototype.displayContent("Welcome to the Greasy Spoon, what do you want to talk about?");
			this.displayAvailableMoves("Enquire about lodging.", "Buy drink.", "What's new?", "Step back from bar.");
			console.log("Currently in the Greasy Spoon, talking the bartender");
		};

		// Export to the global window
		w.Locations = Locations;
	}

}(window));
