(function (w) {
	// Private - Not attached to w[indow]

	// Is this an object?
	function isObject(context) {
		return typeof context === "object";
	}

	// Is this a string?
	function isString(context) {
		return typeof context === "string";
	}

	// Public - Attached to w[indow]
	if (!w.Main) {
		function Main(config) { // jshint ignore: line
			config = config || {};

			if (!isObject(config.data)) {
				throw new TypeError("data must be an object");
			}

			if (!isString(config.inputField)) {
				throw new TypeError("inputField must be a string");
			}

			this.data = Object.freeze(config.data);
			this.inputField = document.getElementById(config.inputField);
			this.inventoryButton = document.getElementById(config.inventoryButton);
			this.newDayButton = document.getElementById(config.newDayButton);

			this.listeners = {};
			this.initEvents();

		}

	    Main.ENTER_KEY = 13;

			// Clears out the array of event listeners
	    Main.prototype.clearEvents = function () {
	      this.inputField.removeEventListener("keydown", this.listeners[this.inputField.id + 
	      	"-keydown"]);
	    };

			// Clears the input box
	    Main.prototype.clearInputField = function () {
	      this.inputField.value = "";

	      return this;
	    };

	    // Clears the screen. To update the user after the clearing
	    Main.prototype.clearOutputField = function () {
	      document.getElementById("output-box").innerHTML = "";
	    };

			// Returns the value of the input field
	    Main.prototype.getInputFieldValue = function () {
	      return this.inputField.value;
	    };

		Main.prototype.checkForABCD = function (i) {
			i = i.toLowerCase();
			if (i === "a" || i === "b" || i === "c" || i === "d") {
				return true;
			}

			return false;
		};

		// Handles what action is taken based what input the user gives
		Main.prototype.handleInput = function (input) {
			if (this.checkForABCD(input)) {
				var p = this.player,
						l = this.locations,
					set = 0;
				input = input.toLowerCase();
				console.log("INPUT:", input, "user's location:" + this.player.getLocation());
				switch (this.player.getLocation()) {
					case "db": {
						if (!set) {
							this.updateDisplay();
							switch (input) {
								case "a":
									p.setLocation("db road");
									l.dragonsbaneRoad();
									break;
								case "b":
									p.setLocation("db shop");
									l.dragonsbaneShop();
									break;
								case "c":
									p.setLocation("db tavern");
									l.dragonsbaneTavern();
									break;
								case "d":
									p.setLocation("db history");
									l.dragonsbaneHistory();
									break;
							}
						}
						break; 
					} case "db tavern bartender lodging": {
						if (!set) {
							this.updateDisplay();
							switch (input) {
								case "a":
									l.dragonsbaneTavernSleeping();									
									break;
								default:
									l.dragonsbaneTavernBartender();
									break;
							}
						}
						break;
					} case "db tavern bartender": {
						if (!set) {
							this.updateDisplay();
							switch (input) {
								case "a":
									l.dragonsbaneTavernBartenderLodging();
									p.setLocation("db tavern bartender lodging");
									break;
								case "b":
									this.displayContent("You gulp down a bold brew.");
									setTimeout(l.dragonsbaneTavernBartender(), 2e3);
									p.setLocation("db tavern bartender");
									break;
								case "c":
									l.dragonsbaneTavernBartenderTalk();
									p.setLocation("db tavern bartender");
									break;
								case "d":
									l.dragonsbaneTavern();
									p.setLocation("db tavern");
									break;
							}
						}
						break;
					} case "db tavern": {
						if (!set) {
							this.updateDisplay();
							switch (input) {
								case "a":
									l.dragonsbaneTavernBartender();
									p.setLocation("db tavern bartender");
									break;
								case "b":
									l.dragonsbaneTavernFight();
									p.setLocation("db tavern bar fight");
									break;
								case "c":
									l.dragonsbane();
									p.setLocation("db");
									break;
								case "d":
									this.displayAdvisorResponse();
									break;
							}
						}
						break;
					} case "db shop": {
						if (!set) {
							this.updateDisplay();
							switch (input) {
								case "a":
									l.dragonsbaneShopCounter();
									p.setLocation("db shop counter");
									break;
								case "b":
									l.dragonsbaneShopOwner();
									p.setLocation("db shop owner");
									break;
								case "c":
									l.dragonsbane();
									p.setLocation("db");
									break;
							}
						}
						break;
					} case "db shop counter": {
						if (!set) {
							this.updateDisplay();
							switch (input) {
								case "a":
									this.buy("apple");
									break;
								case "b":
									this.buy("medallion");
									break;
								case "c":
									this.buy("hp potion");
									break;
								case "d":
									this.buy("empty bottle");
									break;
								case "e":
									p.setLocation("db shop");
									break;
							}
						}
						break;
					} case "db shop owner": {
						if (!set) {
							this.updateDisplay();
							switch (input) {
								case "a":
									this.displayContent("You accepted the quest!!");
									p.addQuest("dragonsbane shop bottle retrieval");
									break;
								case "b":
									l.dragonsbaneShop();
									p.setLocation("db shop");
									break;
							}
						}
						break;
					} case "db history": {
						if (!set) {
							this.updateDisplay();
							switch (input) {
								case "a":
									l.dragonsbaneHistoryMonologue();
									break;
								case "b":
									l.dragonsbaneHistoryInquire();
									break;
								case "c":
									l.dragonsbane();
									p.setLocation("db");
									break;
							}
						}
						break;
					}
				}
			} else {

				// If they type anything else, handle it here ...
				switch (input) {
					// If the user types "?"
					case "?":
						this.displayCommands();
						break;

					// If the user types "i"
					case "inventory":
						this.updateDisplay();
						this.displayInventory();
						break;

					// If the user types "clear"
					case "clear":
						this.updateDisplay();
						break;

					case "lvl up":
						this.player.xp += 4500;
						this.updateDisplay();
						break;

					// If they don't type in any of the above ...
					default:
						this.updateDisplay();
						this.displayAdvisorResponse();
						break;
				}
			}
		};

		Main.prototype.townDisplayContent = function(content) {
			var box = document.getElementById("visuals-box");
			box.innerHTML = "";
			box.insertAdjacentHTML("beforeEnd", content);
		};

		Main.prototype.updateMusic = function () {
			var music = [document.getElementById("music-1"), 
			document.getElementById("music-2"),
			document.getElementById("music-3"), document.getElementById("music-4"), 
			document.getElementById("music-5"), document.getElementById("music-6")],
			d = "duration",
			ct = "currentTime";


			if (music[0][d] - music[0][ct] === 0) {
				music[1].play();
			} else if (music[1][d] - music[1][ct] === 0) {
				music[2].play();
			} else if (music[2][d] - music[2][ct] === 0) {
				music[3].play();
			} else if (music[3][d] - music[3][ct] === 0) {
				music[4].play();
			} else if (music[4][d] - music[4][ct] === 0) {
				music[5].play();
			} else if (music[5][d] - music[5][ct]=== 0) {
				music[0].play();
			}
			
			// counter = 0,
			// current;

			// current = music[counter % 6];
			// if (current.duration - current.currentTime === 0) {
			// 	counter += 1
			// 	current.play();
			// 	}
		};

		// Applies the expense of the item against the user's resources
		Main.prototype.applyExpenses = function (item) {
			var p = this.player,
				c = item.cost;

			p.gold -= c.gold;
			p.food -= c.food;
			p.metal -= c.metal;
		};

		// Applies the perk of the item toward the user's resources
		Main.prototype.applyPerks = function (item) {
			var p = this.player,
				perk = item.perk;

			p.goldRate += perk.gold;
			p.foodRate += perk.food;
			p.metalRate += perk.metal;
		};

		// Returns all the prerequisites for a given item that aren't currently owned
		Main.prototype.getPrerequisites = function (item, option) {
			var i = 0, tempArr = [], dataItem;

			this.updateDisplay();

			for (i; i < item.prerequisites.length; i += 1) {
				dataItem = Data.prototype.getItemFromHash(item.prerequisites[i]);
				
				// Check if item is not already in the inventory ... 
				if (Data.prototype.getItemsNotInInventory.indexOf(dataItem) < 0) {
					// ... add it to the inventory!
					tempArr.push(dataItem.displayName + " (" + dataItem.type + ")");
				}
			}

			if (option === "string") {
				return tempArr.join(", ");
			}

			return tempArr;
		};

		// Processes the user buying something
		Main.prototype.buy = function (item) {
			item = (typeof(item) === "string") ? this.data.getItemFromHash(item) : item;
				var p = this.player;

			// If the user does not have a high enough level ...
			if (item.minimumLevel > p.level) {
				this.updateDisplay();
				// ... they are printed this sad message.
				this.displayAdvisorResponse("needs to level up", item, p);
			} else if (!Data.prototype.itemHasPrerequisites(item)) {
				
				this.updateDisplay();

				this.displayAdvisorResponse("needs prerequisites", item, p);
				

			} else if (this.player.gold < item.cost.gold) {

				this.updateDisplay();

				// If the user's gold stores are too low to afford the item ...
				this.displayContent("YOU'RE TOO LOW ON GOLD!");

			// ... they are allowed to buy it!
			} else {
				// Add the item to the inventory
				this.inventory.addItem(item);

				// Applies the expense of the item against the user's resources
				this.applyExpenses(item);

				// Applies the perks of the item towards the user's resources
				this.applyPerks(item);

				// Increment XP
				p.incrementXPOnPurchase(item);

				// Refresh the visual representation of the stats
				this.updateDisplay();

				// Tell the user that they have bought the itemp				
				this.displayAdvisorResponse("buy item", item);
			}
		};

		// Returns an appropriate advisor comment, based on the situation
		Main.prototype.displayAdvisorResponse = function (situation, item, context) {
			// Is the player male? This determines the gender of the responses.
			var p = context || this.player,
				male = (this.player.getGender() === "male"),//(p.gender === "male"),
				responses, rand, costDifference;

			switch (situation) {
				// The player cannot afford to buy something ...
				case "poverty":
					responses = [
						"My " + (male ? "King" : "Queen") + 
							", according to my book keeping, you are broke."
					];
					
					break;

				case "needs prerequisites":
					var prerequisites = this.getPrerequisites(item, "string");

					responses = [
						"You don't have all the prerequisites. You need " + prerequisites + 
							" to " + item.verb + " this."
					];

					break;

				case "needs gold":
					costDifference = (item.cost.gold - p.gold);
					responses = [
						"Your gold levels are too low, right now. You need " + costDifference + 
							" more <span class='gold'>gold</span> to buy that."
					];
					
					break;

				case "needs food":
					costDifference = (item.cost.food - p.food);
					responses = [
						"Your food levels are too low, right now. You need " + costDifference + 
							" more <span class='food'>food</span> to buy that."
					];
					
					break;

				case "needs metal":
					costDifference = (item.cost.metal - p.metal);
					responses = [
						"Your metal levels are too low, right now. You need " + costDifference + 
							" more <span class='metal'>metal</span> to buy that."
					];

					break;

				case "needs to level up":
					responses = [
						"You need to achieve level " + (p.level + 1) + " to buy that."
					];

					break;


				case "show items in inventory":
					responses = [
						"In your inventory, there appears to be " + 
							this.inventory.getAsString() + "."
					];

					break;

				case "nothing in inventory":
					responses = [
						"There appears to be nothing in your inventory!"
					];

					break;

				default:
					responses = [
						"I beg your pardon?",
						"Are you sure you meant that?",
						"What is your intent, " + (male ? "Sir" : "Milady") + "?",
						"Could you rephrase that, please?",
						"I fear I must insist on correct spelling, " + (male ? "Master" : "Mistress") + ".",
						"I didn't quite catch that. Take a deep breath and speak clearly.",
						"I'm sorry but I don't follow your logic.",
						"Please tell me again what I can do for you.",
						"Please forgive me, " + (male ? "Sir" : "Milady") + 
						", but please swallow your food before speaking.",
						"Come again?",
						"Bless me! What do they teach them in these schools?",
						"Are you talking to me? Are you talking to ME?"
					];
					
					break;

			}

			// Give me a random number between 0 and the number of answers
			rand = (Math.random() * responses.length) | 0;

			this.displayContent("> " + responses[rand]);
		};

		// Prints content to the output box
		Main.prototype.displayContent = function (content, noSpace) {
			var box = document.getElementById("output-box");
			if (!noSpace) {
				content = "<div style='clear:both;'>" + content + "</div>";
			}
			box.insertAdjacentHTML("beforeEnd", content);
			box.scrollTop += 100; // Makes sure that content box is always scrolled down to the bottom
		};

		// Returns the inventory, or prints that the inventory is empty
		Main.prototype.displayInventory = function () {
			if (this.inventory.getAsString()) {
				this.updateDisplay();
				this.displayContent("My Lord, listed here is what you have in your castle, at the moment.");
				this.displayContent(this.inventory.getImages());	
			} else {
				this.displayAdvisorResponse("nothing in inventory");
			}
		};

		// Initializes the events
		Main.prototype.initEvents = function () {
			// Input field
			this.listeners[this.inputField.id + "-keydown"] = this.onInputFieldKeyDown.bind(this);
			this.inputField.addEventListener("keydown", this.listeners[this.inputField.id + "-keydown"]);
		};

		// The main function running the game
		Main.prototype.run = function () {
			// document.getElementById("music-1").play();
			this.updateDisplay();
			this.inputField.focus();
			this.locations.dragonsbane();
		};

		// Updates the content in the player data div in the header
		Main.prototype.displayPlayerInfo = function (content) {
			this.clearPlayerInfo();

			document.getElementById("player-info").insertAdjacentHTML("beforeEnd", 
				"<span class='player-info-span'>" + content + "</span>");
		};

		Main.prototype.clearPlayerInfo = function () {
			document.getElementById("player-info").innerHTML = "";
		};

		// Updates the user on what's going on
		Main.prototype.updateDisplay = function () {
			this.updateMusic();
			this.displayPlayerInfo("XP 0 | Level 1");
			this.game.displayHearts(this.player.getHP(), this.player.getMaxHP());
		};

		// Instantiates a player
		Main.prototype.setPlayer = function (player) {
			if (!Player.isUser(player)) {
				throw new TypeError("player must be an instance of User");
			}

			this.player = player;

			return this;
		};

		// Instantiates the locations
		Main.prototype.setLocations = function (locations) {
			if (!Locations.isLocations(locations)) {
				throw new TypeError("location must be an instance of Locations");
			}

			this.locations = locations;

			return this;
		};

		// Instantiates a game session
		Main.prototype.setSession = function (game) {
			if (!Game.isGame(game)) {
				throw new TypeError("session must be an instance of Game");
			}

			this.game = game;

			return this;
		};

		// Instantiates the inventory
		Main.prototype.setInventory = function (inventory) {
			if (!Inventory.isInventory(inventory)) {
				throw new TypeError("inventory must be an instance of Inventory");
			}

			this.inventory = inventory;

			return this;
		};

		// Instantiates the data
		Main.prototype.setData = function (data) {
			if (!Data.isData(data)) {
				throw new TypeError("data must be an instance of Data");
			}

			this.data = data;

			return this;
		};

		// Event Handlers
		Main.prototype.onInputFieldKeyDown = function (keyEvent) {
			if (keyEvent.keyCode === Main.ENTER_KEY && this.getInputFieldValue() !== "") {
				this.clearOutputField();
				this.updateDisplay();
				this.handleInput(this.getInputFieldValue());
				this.clearInputField();
			}
		};

		// Export to the window global
		w.Main = Main;
	}

}(window));
