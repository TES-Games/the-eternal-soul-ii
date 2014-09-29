(function (w) {
	// Private - Not attached to w[indow]

	// Public - Attached to w[indow]
	if (!w.Locations) {
		function Locations () { // jshint ignore: line
			this.dc = Main.prototype.displayContent;
			this.td = Main.prototype.townDisplayContent;
		}

		Locations.prototype = Object.create(null);
		Locations.prototype.constructor = Locations;

		Locations.isLocations =  function (context) {
			return context instanceof Locations;

		};

		Locations.prototype.disMoves = function () {
			var str = "",
			colors = ["red", "green", "yellow", "blue", "orange"],
			letters = ["A", "B", "C", "D", "E", "F"],
			i = 0;
			for (i; i < arguments.length; i += 1) {
				str += "<span style='color:" + colors[i] + "'>" + 
				letters[i] + "</span> | " + arguments[i] + " ";
			}

			this.dc(str);
		};

		// Towns
		Locations.prototype.dragonsbane = function (player) {
			this.td("Dragonsbane");
			this.disMoves("Leave town.", "Go to shop.", "Visit Tavern", "History of Dragonsbane");
		};

		// DRAGONSBANE -> Tavern
		Locations.prototype.dragonsbaneTavern = function () {
			this.td("The Greasy Spoon Tavern");
			this.disMoves("Talk to bartender.", "Start bar fight.", "Leave tavern");
		};

		Locations.prototype.dragonsbaneTavernBartender = function () {
			this.td("The Greasy Spoon Bartender");
			this.disMoves("Inquire about lodging.", "Buy drink.", "What's new?", "Step back from bar.");
		};

		Locations.prototype.dragonsbaneTavernBartenderTalk = function () {
			this.td("There was a rugged traveler in here the other day telling tales about a chest" +
				" full of treasure on the way to Willowton. Crazy, eh?");
			window.setTimeout(this.dragonsbaneTavernBartender(), 3000);
		};

		Locations.prototype.dragonsbaneTavernBartenderLodging = function () {
			this.td("We don\'t have much, but for 5 gold, I\'ve got an extra bed you could use.");
			this.disMoves("I'll take it!", "No thanks.", "Step back from bar.");
		};

		Locations.prototype.dragonsbaneTavernSleeping = function () {
			window.setTimeout(function() {
				this.td("You take a long, restful nap.");
			}, 2e3);
		};

		Locations.prototype.dragonsbaneTavernFight = function () {
			window.setTimeout(function() {
				this.td("You see a buffoon dancing in the corner. You throw a mug at him.");
			}, 2e3);
			Battle.prototype.begin("buffoon");
		};

		// DRAGONSBANE -> Shop
		Locations.prototype.dragonsbaneShop = function () {
			this.td("The legendary Silver Platter general store");
			this.disMoves("Buy items.", "Talk to owner.", "Leave the store.");
		};

		Locations.prototype.dragonsbaneShopCounter = function () {
			this.td("Interested in something, eh? Let me know if you like anything you see!");
			this.disMoves("Apple", "Medallion", "HP Potion", "Empty Bottle", "Step back from counter");
		};

		Locations.prototype.dragonsbaneShopOwner = function () {
			this.td("I just ran out of empty bottles! If you could grab me some at Willowton" + 
				"I would give you 20 gold for it!");
			this.disMoves("Accept Quest.", "Go on your way.");
		};

		// DRAGONSBANE -> History
		Locations.prototype.dragonsbaneHistory = function () {
			this.td("You approach an old man, sitting alone by the tavern.");
			this.disMoves("Ask about Dragonsbane.", "Anything new in Dragonsbane?", 
				"Return to main square.");
		};

		Locations.prototype.dragonsbaneHistoryMonologue = function () {
			this.td("Absurdly long monologue goes here ...");
		};

		Locations.prototype.dragonsbaneHistoryInquire = function () {
			this.td("Well I heard the shop owner, Cindy Loo-Hoo has run out of empty bottles!");
		};

		// Export to the global window
		w.Locations = Locations;
	}

}(window));
