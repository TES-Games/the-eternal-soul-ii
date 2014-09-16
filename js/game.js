(function (w) {
	this.day = 1;
	this.realmName = "Kindalland";

	// Private - Not attached to w[indow]

	var nextDay = function () {
		this.day += 1;
	};

	var returnDay = function () {
		return this.day;
	};

	var returnRealmName = function () {
		return this.realmName;
	};

	// Public - Attached to w[indow]
	if (!w.Game) {
		function Game(config) { // jshint ignore: line
			config = config || {};
		}

		Game.prototype = Object.create(null);
		Game.prototype.constructor = Game;

		Game.defaultRealmName = "Kindalland";

		Game.isGame = function (context) {
			return context instanceof Game;
		};

		// Returns the current day in the game
		Game.prototype.getDay = function () {
			var day = returnDay();

			return day;
		};

		// Returns the name of the realm
		Game.prototype.getRealmName = function () {
			return returnRealmName();
		};

		// Increments the day by one
		Game.prototype.incrementDay = function () {
			nextDay();

			return this.getDay();
		};

		// Export to the global window
		w.Game = Game;
	}

}(window));
