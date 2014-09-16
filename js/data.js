(function (w) {
	//"use strict";


	if (!w.gameData) { 		// jshint ignore: line
		function Data() {} 	// jshint ignore: line

		// Primary game data
		w.gameData = {
			"data": [
				{
					"level": 1,
					"items": [            {
							"cost": { gold: 2, food: 5, metal: 2 },
							"daysToComplete": 3,
							"displayName": "Farm",
							"displayVerb": "Build",
							"id": "e9e6ee1f9637d691c3eabc5666df6506350d5f35",
							"minimumLevel": 1,
							"name": "farm",
							"perk": { gold: 0, food: 1, metal: 0 },
							"prerequisites": [],
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 1, food: 0, metal: 5 },
							"daysToComplete": 6,
							"displayName": "Mine",
							"displayVerb": "Build",
							"id": "f200d959ba2731f0ddde94137fc248d1a741bb22",
							"minimumLevel": 1,
							"name": "mine",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": [],
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 3, food: 0, metal: 8 },
							"daysToComplete": 4,
							"displayName": "Ploughs",
							"displayVerb": "Research",
							"id": "ec729937300027f66a5664e0d973ea340bdc5fde",
							"minimumLevel": 1,
							"name": "ploughs",
							"perk": { gold: 0, food: 1, metal: 0 },
							"prerequisites": [],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 5, food: 0, metal: 5 },
							"daysToComplete": 5,
							"displayName": "Trade School Blueprints",
							"displayVerb": "Research",
							"id": "fc5eadadad5f1bd98a0c1a4d33681db05f33b5d2",
							"minimumLevel": 1,
							"name": "trade school blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": [],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 7, food: 0, metal: 0 },
							"daysToComplete": 5,
							"displayName": "Cooperative Farming",
							"displayVerb": "Research",
							"id": "76af7e6474fe2753e59b8fd50658faab91e53ce3",
							"minimumLevel": 1,
							"name": "cooperative farming",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": [],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 5, food: 0, metal: 0 },
							"daysToComplete": 6,
							"displayName": "Tunnel Supports",
							"displayVerb": "Research",
							"id": "1797ccc7450d10a00c2b09c5e19726561615e195",
							"minimumLevel": 1,
							"name": "tunnel supports",
							"perk": { gold: 0, food: 0, metal: 1 },
							"prerequisites": [],
							"type": "technology",
							"verb": "research"
						},
						{
							"cost": { gold: 7, food: 0, metal: 0 },
							"daysToComplete": 5,
							"displayName": "Forge Blueprints",
							"displayVerb": "Research",
							"id": "04806af5481f034204bf98ca09b4a62faf2498a1",
							"minimumLevel": 1,
							"name": "forge blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": [],
							"type": "technology",
							"verb": "research"
						}
					]
				},
				{
					"level": 2,
					"items": [
						{
							"cost": { gold: 20, food: 0, metal: 0 },
							"daysToComplete": 5,
							"displayName": "Trade School",
							"displayVerb": "Build",
							"id": "244ac79e1aac183f2a3c82e1d3463f9f7946310a",
							"minimumLevel": 2,
							"name": "trade school",
							"perk": { gold: 0, food: 4, metal: 0 },
							"prerequisites": ["fc5eadadad5f1bd98a0c1a4d33681db05f33b5d2"], // Trade School Blueprints
							"verb": "build"

						},
						{
							"cost": { gold: 2, food: 3, metal: 7 },
							"daysToComplete": 8,
							"displayName": "Forge",
							"displayVerb": "Build",
							"id": "03e7f3fc45bba96f8e63d5faebaef2086f8c07ee",
							"minimumLevel": 2,
							"name": "forge",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["04806af5481f034204bf98ca09b4a62faf2498a1"], // Forge Blueprints
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 4, food: 0, metal: 0 },
							"daysToComplete": 9,
							"displayName": "Improved Farming Practices",
							"displayVerb": "Research",
							"id": "e7e7a5c1e949e2f58fad432e1bfbdfd2e27ec9ad",
							"minimumLevel": 2,
							"name": "improved farming practices",
							"perk": { gold: 0, food: 2, metal: 0 },
							// Trade School Blueprints, Plows
							"prerequisites": [
								"ec729937300027f66a5664e0d973ea340bdc5fde",
								"fc5eadadad5f1bd98a0c1a4d33681db05f33b5d2"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 6, food: 0, metal: 0 },
							"daysToComplete": 7,
							"displayName": "Farmers Guild Blueprints",
							"displayVerb": "Research",
							"id": "381f7fdac91bb731db05395c6cf55ed8c033d82d",
							"minimumLevel": 2,
							"name": "farmers guild blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["76af7e6474fe2753e59b8fd50658faab91e53ce3"], // Coorporative Farming
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 9, food: 0, metal: 0 },
							"daysToComplete": 10,
							"displayName": "Roads",
							"displayVerb": "Research",
							"id": "9fd4818541b451be5c7680cd9199307514e50ad4",
							"minimumLevel": 2,
							"name": "roads",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["244ac79e1aac183f2a3c82e1d3463f9f7946310a"], // Trade School
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 6, food: 3, metal: 8 },
							"daysToComplete": 7,
							"displayName": "Better Tools I",
							"displayVerb": "Research",
							"id": "9a1a881d6aca353fc4b9fcddde4a66eef48c9f3e",
							"minimumLevel": 2,
							"name": "better tools I",
							"perk": { gold: 2, food: 0, metal: 0 },
							"prerequisites": ["03e7f3fc45bba96f8e63d5faebaef2086f8c07ee"], // Forge
							"type": "technology",
							"verb": "research"
						},
						{
							"cost": { gold: 7, food: 4, metal: 2 },
							"daysToComplete": 7,
							"displayName": "Tavern Blueprints",
							"displayVerb": "Research",
							"id": "e2d3fa61c9a02e061d3fc7f017fea2eacdd457e6",
							"minimumLevel": 2,
							"name": "tavern blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": [],
							"type": "technology",
							"verb": "research"
						},
						{
							"cost": { gold: 2, food: 3, metal: 8 },
							"daysToComplete": 9,
							"displayName": "Metalurgy I",
							"displayVerb": "Research",
							"id": "",
							"minimumLevel": 2,
							"name": "metalurgy I",
							"perk": { gold: 7, food: 4, metal: 2 },
							"prerequisites": ["03e7f3fc45bba96f8e63d5faebaef2086f8c07ee"], // Forge
							"type": "technology",
							"verb": "research"
						}
					]
				},
				{
					"level": 3,
					"items": [
						{
							"cost": { gold: 7, food: 3, metal: 5 },
							"daysToComplete": 12,
							"displayName": "Farmers' Guild",
							"displayVerb": "Build",
							"id": "03a78daf17799975a43ebe702d075bcd266c52b7",
							"minimumLevel": 3,
							"name": "stables",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Farmer's Guild, Improved Farming Practice
							"prerequisites": [
								"381f7fdac91bb731db05395c6cf55ed8c033d82d",
								"e7e7a5c1e949e2f58fad432e1bfbdfd2e27ec9ad"
							],
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 7, food: 3, metal: 5 },
							"daysToComplete": 11,
							"displayName": "Tavern",
							"displayVerb": "Build",
							"id": "a64bb926e928783b69790c0412ead02cb8b57818",
							"minimumLevel": 3,
							"name": "tavern",
							"perk": { gold: 2, food: 5, metal: 0 },
							"prerequisites": ["e2d3fa61c9a02e061d3fc7f017fea2eacdd457e6"], // Tavern Blue
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 7, food: 2, metal: 3 },
							"daysToComplete": 14,
							"displayName": "Stables Blueprints",
							"displayVerb": "Research",
							"id": "bfe85afd7585f18d691d5264200aeab04beb2dfc",
							"minimumLevel": 3,
							"name": "stables blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Farmer's Guild, Improved Farming Practices
							"prerequisites": [
								"03a78daf17799975a43ebe702d075bcd266c52b7",
								"e7e7a5c1e949e2f58fad432e1bfbdfd2e27ec9ad"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 5, food: 2, metal: 0 },
							"daysToComplete": 10,
							"displayName": "Cooperative Commerce",
							"displayVerb": "Research",
							"id": "b6aa90b2033cfaa62da719b2669288f78e2396db",
							"minimumLevel": 3,
							"name": "cooperative commerce",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Farmers' Guild, Improved Farming Practices
							"prerequisites": [
								"381f7fdac91bb731db05395c6cf55ed8c033d82d",
								"e7e7a5c1e949e2f58fad432e1bfbdfd2e27ec9ad"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 20, food: 2, metal: 0 },
							"daysToComplete": 8,
							"displayName": "Trader Training",
							"displayVerb": "Research",
							"id": "0ae009f139db0b10da3940728ca2edf3529be32d",
							"minimumLevel": 3,
							"name": "trader training",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["9fd4818541b451be5c7680cd9199307514e50ad4"], // Roads Research
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 20, food: 2, metal: 4 },
							"daysToComplete": 14,
							"displayName": "Mining Guild Blueprints",
							"displayVerb": "Research",
							"id": "8cc8ce0d87c0c58cbad72731bf0519c2a9891320",
							"minimumLevel": 3,
							"name": "mining guild blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["03e7f3fc45bba96f8e63d5faebaef2086f8c07ee"], // Metalurgy I
							"type": "technology",
							"verb": "research"

						}
					]
				},
				{
					"level": 4,
					"items": [
						{
							"cost": { gold: 20, food: 3, metal: 0 },
							"daysToComplete": 4,
							"displayName": "Traders",
							"displayVerb": "Train",
							"id": "5d2e65bf1f6583cd63211ae2bb60b4bc812ed9d1",
							"minimumLevel": 4,
							"name": "traders",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Trader Training Research, Improved Farming Practices Research
							"prerequisites": [
								"0ae009f139db0b10da3940728ca2edf3529be32d",
								"e7e7a5c1e949e2f58fad432e1bfbdfd2e27ec9ad"
							],
							"type": "building",
							"verb": "train"

						},
						{
							"cost": { gold: 8, food: 0, metal: 4 },
							"daysToComplete": 6,
							"displayName": "Horse-Drawn Ploughing",
							"displayVerb": "Research",
							"id": "fcb533e9053a3ef73031a9fb7683b47c30dfa527",
							"minimumLevel": 4,
							"name": "horse-drawn ploughing",
							"perk": { gold: 0, food: 2, metal: 0 },
							"prerequisites": ["bfe85afd7585f18d691d5264200aeab04beb2dfc"], // Stables Research
							"type": "technology", 
							"verb": "research"

						},
						{
							"cost": { gold: 10, food: 3, metal: 0 },
							"daysToComplete": 14,
							"displayName": "Marketplace Blueprints",
							"displayVerb": "Research",
							"id": "1b10a46750821c573bfc09a130343772b2a00968",
							"minimumLevel": 4,
							"name": "marketplace blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["76af7e6474fe2753e59b8fd50658faab91e53ce3"], // Cooperative Commerce Research
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 16, food: 3, metal: 0 },
							"daysToComplete": 8,
							"displayName": "Trade Agreement",
							"displayVerb": "Research",
							"id": "716f60c22097eced168267d0518b20601ba2fa07",
							"minimumLevel": 4,
							"name": "trade agreement",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["5d2e65bf1f6583cd63211ae2bb60b4bc812ed9d1"], // Traders
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 14, food: 3, metal: 6 },
							"daysToComplete": 9,
							"displayName": "Forge Expansion Blueprints",
							"displayVerb": "Research",
							"id": "daae376a5529110a1afc6a5647a08449ec2b1833",
							"minimumLevel": 4,
							"name": "forge expansion blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["03e7f3fc45bba96f8e63d5faebaef2086f8c07ee"], // Forge
							"type": "technology",
							"verb": "research"

						}
					]
				},
				{
					"level": 5,
					"items": [
						{
							"cost": { gold: 8, food: 2, metal: 3 },
							"daysToComplete": 16,
							"displayName": "Marketplace",
							"displayVerb": "Build",
							"id": "bb654057d4020d0f7dc03f509b48d6d8cebb4151",
							"minimumLevel": 5,
							"name": "marketplace",
							"perk": { gold: 5, food: 3, metal: 2 },
							"prerequisites": ["1b10a46750821c573bfc09a130343772b2a00968"], // Marketplace Blueprints 
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 8, food: 2, metal: 3 },
							"daysToComplete": 13,
							"displayName": "Forge Expansion",
							"displayVerb": "Build",
							"id": "4ba6f1a26216f0209d35c99e754fb44a3cfa9860",
							"minimumLevel": 5,
							"name": "forge expansion",
							"perk": { gold: 2, food: 2, metal: 2 },
							"prerequisites": ["daae376a5529110a1afc6a5647a08449ec2b1833"], // Forge Expansion Blueprints
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 8, food: 0, metal: 0 },
							"daysToComplete": 8,
							"displayName": "School for Craftsmen Blueprints",
							"displayVerb": "Research",
							"id": "1c920c77f2de56c90eaf29f48f1c0f809bd15fe8",
							"minimumLevel": 5,
							"name": "school for craftsmen blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Marketplace, Forge Expansion
							"prerequisites": [ 
								"bb654057d4020d0f7dc03f509b48d6d8cebb4151", 
								"4ba6f1a26216f0209d35c99e754fb44a3cfa9860"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 8, food: 0, metal: 0 },
							"daysToComplete": 8,
							"displayName": "Better Tools II",
							"displayVerb": "Research",
							"id": "3bd18bc1d9ce6e9db84dc585c75d6017b367b18d",
							"minimumLevel": 5,
							"name": "better tools II",
							"perk": { gold: 0, food: 2, metal: 1 },
							// Farmer's Guild, Metalurgy I, Better Tools I
							"prerequisites": [
								"03a78daf17799975a43ebe702d075bcd266c52b7", 
								"03e7f3fc45bba96f8e63d5faebaef2086f8c07ee",
								"9a1a881d6aca353fc4b9fcddde4a66eef48c9f3e"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 12, food: 0, metal: 0 },
							"daysToComplete": 9,
							"displayName": "Artisans",
							"displayVerb": "Research",
							"id": "cd1f3d449b3b97eda3dc031a82dac9c4075191a6",
							"minimumLevel": 5,
							"name": "artisans",
							"perk": { gold: 2, food: 0, metal: 0 },
							"prerequisites": ["bb654057d4020d0f7dc03f509b48d6d8cebb4151"], // Marketplace
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 17, food: 0, metal: 0 },
							"daysToComplete": 16,
							"displayName": "Trade Route",
							"displayVerb": "Research",
							"id": "2b9b374f86fee1807abd194f096ab59ccb683ac6",
							"minimumLevel": 5,
							"name": "trade route",
							"perk": { gold: 3, food: 0, metal: 0 },
							"prerequisites": ["716f60c22097eced168267d0518b20601ba2fa07"], // Trade Agreement
							"type": "technology",
							"verb": "research"

						}
					]
				},
				{
					"level": 6,
					"items": [
						{
							"cost": { gold: 8, food: 0, metal: 0 },
							"daysToComplete": 15,
							"displayName": "School for Craftsmen",
							"displayVerb": "Build",
							"id": "1832879c2e76776e71171523b16f2ed27de1c7ed",
							"minimumLevel": 6,
							"name": "school for craftsmen",
							"perk": { gold: 1, food: 1, metal: 1 },
							"prerequisites": ["1c920c77f2de56c90eaf29f48f1c0f809bd15fe8"], // School for Craftsmen Blueprints
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 8, food: 0, metal: 0 },
							"daysToComplete": 13,
							"displayName": "Marketplace Expansion Blueprints",
							"displayVerb": "Research",
							"id": "f69ebe4f16110885cb836029dfb8c155b7a59ded",
							"minimumLevel": 6,
							"name": "marketplace expansion Blueprints",
							"perk": { gold: 1, food: 1, metal: 1 },
							// Marketplace, Trade Route  
							"prerequisites": [ 
								"bb654057d4020d0f7dc03f509b48d6d8cebb4151", 
								"2b9b374f86fee1807abd194f096ab59ccb683ac6"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 15, food: 0, metal: 0 },
							"daysToComplete": 16,
							"displayName": "Fertilizer",
							"displayVerb": "Research",
							"id": "9be2e196ec10cab78fb49872882f03f4c042ea7f",
							"minimumLevel": 6,
							"name": "fertilizer",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["bb654057d4020d0f7dc03f509b48d6d8cebb4151"], // Marketplace
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 21, food: 0, metal: 0 },
							"daysToComplete": 17,
							"displayName": "Trade Route Expert",
							"displayVerb": "Research",
							"id": "42a8fe7f44543a3700c3a8e481ebd7070176e632",
							"minimumLevel": 6,
							"name": "trade route expert",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["2b9b374f86fee1807abd194f096ab59ccb683ac6"], // Trade Route
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 21, food: 0, metal: 0 },
							"daysToComplete": 17,
							"displayName": "Foreman School Blueprints",
							"displayVerb": "Research",
							"id": "4b1751ae4473f3b78cf4deaee826814528a8e4a3",
							"minimumLevel": 6,
							"name": "trade route expert",
							"perk": { gold: 0, food: 0, metal: 0 },
							// School for Craftsmen, Marketplace Expansion
							"prerequisites": [ 
								"1832879c2e76776e71171523b16f2ed27de1c7ed",
								"f69ebe4f16110885cb836029dfb8c155b7a59ded"
							],
							"type": "technology",
							"verb": "research"

						}
					]
				},
				{
					"level": 7,
					"items": [
						{
							"cost": { gold: 14, food: 0, metal: 0 },
							"daysToComplete": 12,
							"displayName": "Marketplace Expansion",
							"displayVerb": "Build",
							"id": "8599ca2f83645340d6217f13c5735c62675fd55b",
							"minimumLevel": 7,
							"name": "marketplace expansion",
							"perk": { gold: 1, food: 1, metal: 1 },
							"prerequisites": ["f69ebe4f16110885cb836029dfb8c155b7a59ded"], // Marketplace Expansion Blueprints
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 19, food: 8, metal: 3 },
							"daysToComplete": 15,
							"displayName": "Foreman School",
							"displayVerb": "Build",
							"id": "e3576ee0c385bb65d96711b5569367a0e77f72f1",
							"minimumLevel": 7,
							"name": "foreman school",
							"perk": { gold: 1, food: 1, metal: 2 },
							"prerequisites": ["4b1751ae4473f3b78cf4deaee826814528a8e4a3"], // Forman School Blueprints
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 10, food: 0, metal: 0 },
							"daysToComplete": 17,
							"displayName": "Better Tools III",
							"displayVerb": "Research",
							"id": "cb823a10c04d9154eed3238f9bc749a6a6ed99de",
							"minimumLevel": 7,
							"name": "better tools III",
							"perk": { gold: 0, food: 2, metal: 0 },
							// Trade Route Expert , Marketplace Expansion, Better Tools II
							"prerequisites": ["42a8fe7f44543a3700c3a8e481ebd7070176e632",
								"8599ca2f83645340d6217f13c5735c62675fd55b",
								"3bd18bc1d9ce6e9db84dc585c75d6017b367b18d"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 15, food: 0, metal: 0 },
							"daysToComplete": 4,
							"displayName": "Militia",
							"displayVerb": "Research",
							"id": "edfd06b1c2527c913d50f6563640f33dc30363a1",
							"minimumLevel": 7,
							"name": "militia",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Trade Route Expert, Marketplace Expansion
							"prerequisites": [
								"42a8fe7f44543a3700c3a8e481ebd7070176e632",
								"8599ca2f83645340d6217f13c5735c62675fd55b"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 21, food: 0, metal: 0 },
							"daysToComplete": 19,
							"displayName": "Language Training",
							"displayVerb": "Research",
							"id": "b790fd3d0deff1764cb764656621681501d02c81",
							"minimumLevel": 7,
							"name": "language training",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["42a8fe7f44543a3700c3a8e481ebd7070176e632"], // Trade Route Expert
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 19, food: 19, metal: 4 },
							"daysToComplete": 19,
							"displayName": "Mining Academy Blueprints",
							"displayVerb": "Research",
							"id": "73e54891b16a632fa8dd249f6d9070097d3eb17a",
							"minimumLevel": 7,
							"name": "mining academy blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["e3576ee0c385bb65d96711b5569367a0e77f72f1"], // Foreman School
							"type": "technology",
							"verb": "research"
						}
					]
				},
				{
					"level": 8,
					"items": [
						{
							"cost": { gold: 8, food: 0, metal: 0 },
							"daysToComplete": 7,
							"displayName": "Militiamen",
							"displayVerb": "Train",
							"id": "2277df6ad864a2fd8bba52fbc7f96f5536ea0db6",
							"militaryPower": 3,
							"minimumLevel": 8,
							"name": "militiamen",
							"perk": { gold: 1, food: 1, metal: 1 },
							"prerequisites": ["edfd06b1c2527c913d50f6563640f33dc30363a1"], // Militia
							"type": "unit",
							"UpkeepCost": { gold: 2, food: 2, metal: 0 },
							"verb": "train"

						},
						{
							"cost": { gold: 10, food: 0, metal: 0 },
							"daysToComplete": 14,
							"displayName": "Mining Academy",
							"displayVerb": "Build",
							"id": "49748533c270610e42c42b772b6eb2509a7de267",
							"minimumLevel": 8,
							"name": "mining academy",
							"perk": { gold: 0, food: 0, metal: 2 },
							"prerequisites": ["73e54891b16a632fa8dd249f6d9070097d3eb17a"], // Mining Academy Blueprints
							"type": "building",
							"verb": "build"

						},
						{
							"cost": { gold: 10, food: 0, metal: 0 },
							"daysToComplete": 17,
							"displayName": "Irrigation",
							"displayVerb": "Research",
							"id": "efd9fa50a0406b891b83a143f5985f4086c7b6b7",
							"minimumLevel": 8,
							"name": "irrigation",
							"perk": { gold: 0, food: 2, metal: 0 },
							"prerequisites": ["cb823a10c04d9154eed3238f9bc749a6a6ed99de"], // Better Tools III
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 15, food: 0, metal: 0 },
							"daysToComplete": 21,
							"displayName": "Military Training",
							"displayVerb": "Research",
							"id": "5dafabc4c554f16954fd253bd8212b30deb005d5",
							"minimumLevel": 8,
							"name": "military training",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Militia, Marketplace Expansion
							"prerequisites": [
								"edfd06b1c2527c913d50f6563640f33dc30363a1",
								"8599ca2f83645340d6217f13c5735c62675fd55b"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 21, food: 0, metal: 0 },
							"daysToComplete": 16,
							"displayName": "Ship Building",
							"displayVerb": "Research",
							"id": "7e0eb92f12e626de10ddfd23022de7d2fa06ae37",
							"minimumLevel": 8,
							"name": "ship building",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["b790fd3d0deff1764cb764656621681501d02c81"], // Language Training
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 24, food: 6, metal: 15 },
							"daysToComplete": 17,
							"displayName": "Mining Academy Expansion Blueprints",
							"displayVerb": "Research",
							"id": "6a79253c3a160a63fd22ac09e91a894a764c1f28",
							"minimumLevel": 8,
							"name": "mining academy expansion blueprints",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["49748533c270610e42c42b772b6eb2509a7de267"], // Mining Academy
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 27, food: 16, metal: 24 },
							"daysToComplete": 17,
							"displayName": "Metal Weaponry",
							"displayVerb": "Research",
							"id": "d6d3e4841e1ce0256f41712627011704cb624e6a",
							"minimumLevel": 8,
							"name": "metal weaponry",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["49748533c270610e42c42b772b6eb2509a7de267"], // Mining Academy
							"type": "technology",
							"verb": "research"

						}
					]
				},
				{
					"level": 9,
					"items": [
						{
							"cost": { gold: 8, food: 4, metal: 4 },
							"daysToComplete": 11,
							"displayName": "Foot Soldiers",
							"displayVerb": "Train",
							"id": "b9b33455bc3771dbd8987b6a45643f71901e2294",
							"militaryPower": 5,
							"minimumLevel": 9,
							"name": "foot soldiers",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["3d94859254ab38aa45d664804bd0515488deedab"], // Barracks
							"type": "unit",
							"UpkeepCost": { gold: 4, food: 4, metal: 0 },
							"verb": "train"

						},
						{		
							"cost": { gold: 8, food: 0, metal: 0 },
							"daysToComplete": 18,
							"displayName": "Barracks",
							"displayVerb": "Build",
							"id": "3d94859254ab38aa45d664804bd0515488deedab",
							"minimumLevel": 9,
							"name": "barracks",
							"perk": { gold: 1, food: 1, metal: 1 },
							"prerequisites": ["5dafabc4c554f16954fd253bd8212b30deb005d5"], // Military Training
							"type": "building",
							"verb": "build"

						},
						{		
							"cost": { gold: 19, food: 10, metal: 21 },
							"daysToComplete": 21,
							"displayName": "Mining Academy Expansion",
							"displayVerb": "Build",
							"id": "c98d3ecc27de2b04f1ec50fb0d08ae18c4f6eb8c",
							"minimumLevel": 9,
							"name": "barracks",
							"perk": { gold: 1, food: 1, metal: 1 },
							"prerequisites": ["6a79253c3a160a63fd22ac09e91a894a764c1f28"], // Mining Academy Expansion Blueprints
							"type": "building",
							"verb": "build"

						},

						{
							"cost": { gold: 10, food: 0, metal: 0 },
							"daysToComplete": 17,
							"displayName": "Fishing",
							"displayVerb": "Research",
							"id": "",
							"minimumLevel": 9,
							"name": "fishing",
							"perk": { gold: 1, food: 5, metal: 1 },
							// Ship Building, Marketplace Expansion
							"prerequisites": [
								"7e0eb92f12e626de10ddfd23022de7d2fa06ae37",
								"8599ca2f83645340d6217f13c5735c62675fd55b"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 15, food: 0, metal: 0 },
							"daysToComplete": 20,
							"displayName": "Black Powder",
							"displayVerb": "Research",
							"id": "a4de91e6d76c670c7c36c62e6404eaf29d97cfa9",
							"minimumLlevel": 9,
							"name": "black powder",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Barracks, Marketplace Expansion
							"prerequisites": [
								"3d94859254ab38aa45d664804bd0515488deedab",
								"8599ca2f83645340d6217f13c5735c62675fd55b"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 21, food: 0, metal: 0 },
							"daysToComplete": 17,
							"displayName": "Sea Trading",
							"displayVerb": "Research",
							"id": "d54177e108d3beaae265dd06c38086e38f6320a7",
							"minimumLevel": 9,
							"name": "sea trading",
							"perk": { gold: 1, food: 3, metal: 5 },
							// Trade Route Expert, Ship Building
							"prerequisites": [
								"42a8fe7f44543a3700c3a8e481ebd7070176e632",
								"7e0eb92f12e626de10ddfd23022de7d2fa06ae37"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 24, food: 3, metal: 15 },
							"daysToComplete": 17,
							"displayName": "Mining Explosives",
							"displayVerb": "Research",
							"id": "58a430ce5c6d380d3f141b5d24f4532815c044b3",
							"minimumLevel": 9,
							"name": "mining explosives",
							"perk": { gold: 1, food: 3, metal: 5 },
							"prerequisites": ["a4de91e6d76c670c7c36c62e6404eaf29d97cfa9"], // Black Powder
							"type": "technology",
							"verb": "research"

						}
					]
				},
				{
					"level": 10,
					"items": [
						{
							"cost": { gold: 8, food: 0, metal: 0 },
							"daysToComplete": 13,
							"displayName": "Escort Ship",
							"displayVerb": "Train",
							"id": "674abd779fc390be2b33b0043f42111aca12c1a7",
							"militaryPower": 12,
							"minimumLevel": 10,
							"name": "escort ship",
							"perk": { gold: 1, food: 1, metal: 1 },
							// Black Powder, Ship Building
							"prerequisites": [
								"a4de91e6d76c670c7c36c62e6404eaf29d97cfa9", 
								"7e0eb92f12e626de10ddfd23022de7d2fa06ae37"
							],
							"type": "unit",
							"UpkeepCost": { gold: 5, food: 6, metal: 2 },
							"verb": "train"

						},
						{
							"cost": { gold: 8, food: 0, metal: 0 },
							"daysToComplete": 10,
							"displayName": "Musketeer",
							"displayVerb": "Train",
							"id": "",
							"militaryPower": 7,
							"minimumLevel": 10,
							"name": "musketeer",
							"perk": { gold: 1, food: 1, metal: 1 },
							"prerequisites": ["a4de91e6d76c670c7c36c62e6404eaf29d97cfa9"], // Black Powder
							"type": "unit",
							"UpkeepCost": { gold: 3, food: 3, metal: 1 },
							"verb": "train"

						},
						{
							"cost": { gold: 10, food: 0, metal: 0 },
							"daysToComplete": 18,
							"displayName": "Crop Rotation",
							"displayVerb": "Research",
							"id": "674abd779fc390be2b33b0043f42111aca12c1a7",
							"minimumLevel": 10,
							"name": "crop rotation",
							"perk": { gold: 0, food: 6, metal: 0 },
							"prerequisites": ["efd9fa50a0406b891b83a143f5985f4086c7b6b7"], // Irrigation
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 15, food: 0, metal: 0 },
							"daysToComplete": 14,
							"displayName": "Advanced Ship Building",
							"displayVerb": "Research",
							"id": "6dcfb8045059547e2bf1ff5aa863b4adddd22925",
							"minimumLevel": 10,
							"name": "advanced ship building",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Sea Trading, Black Powder
							"prerequisites": [
								"d54177e108d3beaae265dd06c38086e38f6320a7",
								"a4de91e6d76c670c7c36c62e6404eaf29d97cfa9"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 21, food: 0, metal: 0 },
							"daysToComplete": 13,
							"displayName": "Trade Expansion",
							"displayVerb": "Research",
							"id": "bfd0b7ce8608ba42a381d88cd79dc797eeee198b",
							"minimumLevel": 10,
							"name": "trade expansion",
							"perk": { gold: 0, food: 0, metal: 0 },
							// Sea Trading, 1 Escort Ship Train
							"prerequisites": [
								"d54177e108d3beaae265dd06c38086e38f6320a7",
								"674abd779fc390be2b33b0043f42111aca12c1a7"
							],
							"type": "technology",
							"verb": "research"

						}
					]
				},
				{
					"level": 11,
					"items": [
						{
							"cost": { gold: 18, food: 17, metal: 9 },
							"daysToComplete": 27,
							"displayName": "War Ships",
							"displayVerb": "Train",
							"id": "f890937989b26099b43e8460ff3bba87fb663e9f",
							"militaryPower": 23,
							"minimumLevel": 11,
							"name": "war ships",
							"perk": { gold: 1, food: 1, metal: 1 },
							"prerequisites": ["6dcfb8045059547e2bf1ff5aa863b4adddd22925"], // Advanced Ship Building
							"type": "unit",
							"UpkeepCost": { gold: 12, food: 15, metal: 5 },
							"verb": "train"

						},
						{
							"cost": { gold: 19, food: 20, metal: 12 },
							"daysToComplete": 22,
							"displayName": "Water Mill",
							"displayVerb": "Research",
							"id": "640c60dd444e2872bb162b093183fcdeff3db943",
							"minimumLevel": 11,
							"name": "water mill",
							"perk": { gold: 0, food: 7, metal: 0 },
							"prerequisites": ["674abd779fc390be2b33b0043f42111aca12c1a7"], // Crop Rotation
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 65, food: 30, metal: 21 },
							"daysToComplete": 26,
							"displayName": "Land Expansion",
							"displayVerb": "Research",
							"id": "ec7aa1663639af0f97aef10461584f298a7dc732",
							"minimumLevel": 11,
							"name": "land expansion",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["bfd0b7ce8608ba42a381d88cd79dc797eeee198b"], // Trade Expansion
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 108, food: 513, metal: 160 },
							"daysToComplete": 37,
							"displayName": "Empire Trading",
							"displayVerb": "Research",
							"id": "d366c2cfab02281e850e1244ba15c4b865dff59f",
							"minimumLevel": 11,
							"name": "empire trading",
							"perk": { gold: 0, food: 0, metal: 0 },
							// 1 War Ships Train, Land Expansion, Water Mill
							"prerequisites": [
								"f890937989b26099b43e8460ff3bba87fb663e9f", 
								"ec7aa1663639af0f97aef10461584f298a7dc732", 
								"640c60dd444e2872bb162b093183fcdeff3db943"
							],
							"type": "technology",
							"verb": "research"

						},
						{
							"cost": { gold: 97, food: 310, metal: 133 },
							"daysToComplete": 47,
							"displayName": "Empire Mining",
							"displayVerb": "Research",
							"id": "",
							"minimumLevel": 11,
							"name": "empire mining",
							"perk": { gold: 0, food: 0, metal: 0 },
							"prerequisites": ["d366c2cfab02281e850e1244ba15c4b865dff59f"], // Empire Trading
							"type": "technology",
							"verb": "research"

						}
					]
				}
			]
		};

		Data.isData =  function (context) {
			return context instanceof Data;
		};

		// Returns the items that are available for purchase, based on the user's level
		Data.prototype.getItemsUpToLevel = function (level) {
			var d = gameData.data,
			items,
			data = [];
			// goes through the player's levels
			for (var i = 0; i <= level; i += 1) {
				// for every level, give me the items data
				items = d[i].items;

				for (var j = 0; j < items.length; j += 1) {
					data.push(items[j]);
				}
			}
			return data;
		};

		// Does the user have the prerequisites to buy the item?
		Data.prototype.itemHasPrerequisites = function (item) {
			var prereq = item.prerequisites,
				itemsNotInInv = Inventory.prototype.getInventoryIDs();

			// for all the prerequisites ...
			for (var i = 0; i < prereq.length; i += 1) {
				// ... if any of them aren't found in the inventory ...
				if (itemsNotInInv.indexOf(prereq[i]) < 0) {
					// ... then, return false
					return false;
				}
			}

			// the item has all it's prerequisites
			return true;
		};

		// Returns the item from it's associated SHA1 hash.
		Data.prototype.getItemFromHash = function (hash) {
			var items = this.getItemsNotInInventory(User.prototype.getLevel());

			// for all the items not in the inventory ...
			for (var i = 0; i < items.length; i += 1) {
				// ... if any of them equal the hash given in the parameter ...
				if (items[i].id === hash) {
					// ... return it!
					return items[i];
				}
			}

			throw new TypeError("Hash given is not associated to any known item.");
		};

		// Returns how many instance of an item there are
		Data.prototype.getNumberOfInstances = function(hash) {
			var invIDs = Inventory.prototype.getInventoryIDs(),
				i = 0,
				counter = 0;

			for (i; i < invIDs.length; i += 1) {
				if (invIDs[i] === hash) {
					counter += 1;
					
				}
			}

			return counter;
		};

		// Returns if the item can be bought mulitple times and if so,
		// has it been bought up to that yet
		Data.prototype.checkForLimit = function(item, level) {
			var items = [ // array of items available for multiple purchases
				"e9e6ee1f9637d691c3eabc5666df6506350d5f35", // farm
				"f200d959ba2731f0ddde94137fc248d1a741bb22" // mine
			]; 

			for (var i = 0; i < items.length; i += 1) {
				// if the item is one of the items available for multiple purchases ... 
				if (item === items[i]) { 
					// ... and the number of instances of the item is >= than the user's level ...
					if (this.getNumberOfInstances(item) >= level) { 
						// ... return that the user is NOT OK to buy the item
						return false; 
					// ... there are not too many instances of the item for the user to be able to buy this, right now
					} else { 
						return true;
					}
				}
			}

			// The user isn't trying to buy a mulitple purchase item
			return false;
		};

		// Returns the items for sale that are not currently in the user's inventory
		Data.prototype.getItemsNotInInventory = function (level) {
			var invIDs = Inventory.prototype.getInventoryIDs(),
				items = this.getItemsUpToLevel(level),
				numOfItems = 100, // the maximum number of items that can be shown at a time
				uniqueItems = [],
				itemIDs = [],
				i = 0;


			// if (items.length < 7) {
				numOfItems = items.length;
			// }

			for (; i < numOfItems; i += 1) {
				itemIDs.push(items[i].id);
			}

			// For the length of the itemsNames array ...
			for (i = 0; i < itemIDs.length; i += 1) {
				// ... if the index of the inventory id is not found in the itemsNames array...
				// ... ie. the item for sale is not in the inventory so ...

				if ((invIDs.indexOf(itemIDs[i]) < 0) || this.checkForLimit(itemIDs[i], level))  {

					// ... add the item to the uniqueItems array!
					uniqueItems.push(items[i]);
				}
			}

			// Returns the array of unique items
			return uniqueItems;
		};

		// Export to the window global
		w.Data = Data;
	}
}(window));
