(function (w) {
  // Private - Not attached to w[indow]

  // Public - Attached to w[indow]
  if (!w.User) {
	function User () { // jshint ignore: line
	  // Initial values
	  this.farms = User.defaultFarms;
	  this.food = User.initialFood;
	  this.gender = "male";
	  this.gold = User.initialGold;
	  this.level = User.initialLevel; // What level the user is on
	  this.metal = User.initialMetal;
	  this.militaryPower = User.defaultMilitaryPower;
	  this.mines = User.defaultMines;
	  this.username = User.defaultName;
	  this.xp = User.initialXP;

	  // Rates
	  this.foodRate = User.defaultFoodRate;
	  this.goldRate = User.defaultGoldRate;
	  this.metalRate = User.defaultMetalRate;
	  this.xpRate = User.defaultXPRate;

	  // Bonuses
	  this.foodBonus = User.defaultFoodBonus; // Increases food output
	  this.goldBonus = User.defaultGoldBonus; // A bonus to the daily gold intake
	  this.miningBonus = User.defaultMiningBonus; // A bonus to mining output
	  this.researchBonus = User.defaultResearchBonus; // A bonus to reseach speed

	  // Properties
	  this.inventory = null;
	}

	// Inheritance
	User.prototype = Object.create(null);
	User.prototype.constructor = User;

	// Class
	User.defaultFarms = 2;
	User.defaultFoodBonus = 0;
	User.defaultFoodRate = 15;
	User.defaultGoldBonus = 0;
	User.defaultGoldRate = 3;
	User.defaultMetalRate = 0;
	User.defaultMilitaryPower = 0;
	User.defaultMines = 1;
	User.defaultMiningBonus = 0;
	User.defaultName = "Gandian";
	User.defaultResearchBonus = 0;
	User.defaultXPRate = 8;
	User.initialFood = 25;
	User.initialGold = 8;
	User.initialLevel = 1;
	User.initialMetal = 10;
	User.initialXP = 0;

	User.isUser = function (context) {
	  return context instanceof User;
	};

	// Updates the player's level based on their XP
	User.prototype.updateLevel = function () {
	  var first = 2584, second = 4181, newLevel = 1, i = 0, latest = 2584;
	  for (; latest < this.xp; i += 1) {
		if (i % 2 === 0) {
		  first += second;
		  latest = second;
		} else {
		  second += first;
		  latest = first;

		}
		newLevel += 1;
	  }

	  this.level = newLevel;
	};

	// Applies random bonuses to gold, food, and metal
	User.prototype.applyRandomBonuses = function () {

  	var goldDataIcon,
		foodDataIcon,
		metalDataIcon,
		goldMinimum = 2,
		goldMaximum = 7,
		foodMinimum = 7,
		foodMaximum = 35,
		metalMinimum = 4,
		metalMaximum = 20,
		xpMininmum = 7,
		xpMaximum = 15,

		dailyGoldBonus = Math.floor((Math.random() * goldMaximum) + goldMinimum),
		dailyFoodRation = Math.floor((Math.random() * foodMaximum) + foodMinimum),
		dailyMetalHaul = Math.floor((Math.random() * metalMaximum) + metalMinimum),
		dailyXpBoost = Math.floor((Math.random() * xpMaximum) + xpMininmum);
		

	this.gold += dailyGoldBonus;
	this.food += dailyFoodRation;
	this.metal += dailyMetalHaul;
	this.xp += dailyXpBoost;

	goldDataIcon = "<img src='images/coin_icon.png' id='gold-icon-bigger'/>";
	foodDataIcon = "<img src='images/food_icon.png' id='food-icon-bigger'/>";
	metalDataIcon = "<img src='images/metal_icon.png' id='metal-icon-bigger'/>";

	  Main.prototype.displayContent("<div id='new-day-data'><span style='color:gold; " + 
		"font-family:\"Eagle Lake\", sans-serif''>" + goldDataIcon +
		  dailyGoldBonus + "</span> | <span style='color:green; " + 
		"  font-family: \"Eagle Lake\", sans-serif''>" + foodDataIcon + dailyFoodRation +
		  "</span> | <span style='color:grey; font-family: \"Eagle Lake\", sans-serif'>" + 
		  metalDataIcon + dailyMetalHaul + "</span> | XP " + dailyXpBoost + "</div>");

	  return this;
	};

	// Apply the resources the user gets daily
	User.prototype.applyRates = function () {
	  this.food += this.foodRate;
	  this.gold += this.goldRate;
	  this.xp += this.xpRate;

	  return this;
	};

	User.prototype.getInventory = function () {
	  if (!this.inventory) {
		this.inventory = new Inventory();
	  }

	  return this.inventory;
	};

	/**
	 * Gets the level of the user.
	 */
	User.prototype.getLevel = function () {
	  this.updateLevel();

	  return this.level;
	};

	/**
	 * Gets the XP of the user.
	 */
	User.prototype.getXP = function () {
	  return this.xp;
	};


	/**
	 * Gets the gender of the user.
	 */
	User.prototype.getGender = function () {
	  return this.gender;
	};

	/**
	 * Increases the XP of the user.
	 */
	User.prototype.incrementXP = function (increment) {
		this.xp += increment;

		return this.xp;
	};

	User.prototype.incrementXPOnPurchase = function (item) {
		var c = item.cost,
			amount = (((c.food + c.metal + c.gold) * this.level) * (Math.random() * 15) | 0);
		this.xp += amount;
		console.log("Increased XP by", amount);
	};

	/**
	 * Returns the current gold rate.
	 */
	User.prototype.getGoldRate = function () {
		return this.goldRate;
	};

	/**
	 * Returns the current metal rate.
	 */
	User.prototype.getMetalRate = function () {
	  return this.metalRate;
	};

	/**
	 * Returns the current food rate.
	 */
	User.prototype.getFoodRate = function () {
	  return this.foodRate;
	};

	// Export to the window global
	w.User = User;
  }
}(window));
