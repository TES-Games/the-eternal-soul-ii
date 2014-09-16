(function (w) {
	// Private - Not attached to w[indow]
	function isArray(context) {
		return context instanceof Array;
	}

	// Public - Attached to w[indow]
	if (!w.Inventory) {
		function Inventory(items) { // jshint ignore: line
			this.items = items;
		}

		Inventory.prototype = Object.create(null);
		Inventory.prototype.constructor = Inventory;

		Inventory.isInventory =  function (context) {
			return context instanceof Inventory;
		};

		// Returns the objects in the inventory in a array
		Inventory.prototype.getItems = function () {
			if (!this.items) {
				this.items = [];
			}

			return this.items;
		};

		// Checks to see if there is an inventory ... if there isn't - create one.
		Inventory.prototype.checkIfInventoryExists = function () {
			if (!isArray(this.items)) {
				this.items = [];
			}
		};

		// Returns the ids of the items in the inventory in an array
		Inventory.prototype.getInventoryIDs = function () {
			this.checkIfInventoryExists();

			var tempArr = [],
				currentInv = this.getItems(),
				i = 0;

			if (currentInv) {
				// add all the ids of the current inventory into a temp array
				for (; i < currentInv.length; i += 1) {
					tempArr.push(currentInv[i].id);
				}
			}

			// return the temp array
			return tempArr;
		};

		// Returns the display names of the items in the inventory as a string
		Inventory.prototype.getAsString = function () {
			this.checkIfInventoryExists();

			var tempArr = [],
			currentInv = this.getItems(),
			i = 0;

			// add all the display names of the items in the inventory to the tempArr
			for (; i < currentInv.length; i += 1) {
				tempArr.push(currentInv[i].displayName);
			}

			// return the temp array
			return tempArr.join(", ");
		};

		// Returns the item iamges fo the items in the inventory
		Inventory.prototype.getImages = function () {
			this.checkIfInventoryExists();

			var tempArr = [],
			currentInv = this.getItems(),
			i = 0;

			// add all the display names of the items in the inventory to the tempArr
			for (; i < currentInv.length; i += 1) {
				tempArr.push("<img src=\"images/" + currentInv[i].name + "_icon.jpg\" class=\"inventory-image\" />");
			}

			// return the temp array
			return tempArr.join("");
		};



		// Adds an item to the inventory
		Inventory.prototype.addItem = function (item) {
			this.checkIfInventoryExists();

			item = item || null;

			if (item !== null) {
				this.items.push(item);
			}

			return this.items;
		};

		// Removes an item from the inventory
		Inventory.prototype.removeItem = function (item) {
			this.checkIfInventoryExists();

			var tempArr = [],
				i = 0;


			for (; i < this.items.length; i += 1) {
				if (this.getInventoryIDs[i] !== item.name) {
					tempArr.push(this.items[i]);
				}
			}

			// replace the current inventory to the one without the item
			this.items = tempArr;

			// return the array without the item
			return tempArr;
		};

		// Export to the global window
		w.Inventory = Inventory;
	}

}(window));
