<script>
	let tick = 0;
	const hello = [
		'Hello',
		'Bonjour',
		'Hallo',
		'Hola',
		'Hallå',
		'Selam',
		'你好',
		'こんにちは',
		'Привет',
		'Kumusta',
		'Ciao',
		'Olá',
		'Ahlan',
		'Halløj'
	];
	let helloTwo = [];
	let helloVar = 'Hello';

	const fonts = [
		'font-[Arial]',
		'font-[Times]',
		'font-[Helvetica]',
		'font-[Courier]',
		'font-[Verdana]',
		'font-[Candara]',
		'font-[Optima]',
		'font-[Cambria]',
		'font-[Garamond]',
		'font-[Didot]',
		'font-[Copperplate]',
        'font-[Montserrat]'
	];
	let fontsTwo = [];
	let fontVar = '';
	let svgFill = '#00000000';
	let old = '';

	const helloFont = [];

	setInterval(() => {
		old = helloVar;
		helloTwo = hello;
		helloVar = hello[Math.floor(Math.random() * hello.length)];
		if (old === helloVar) {
			helloVar = hello[Math.floor(Math.random() * hello.length)];
		}
		
		old = fontVar;
		fontsTwo = hello;
		fontVar = fonts[Math.floor(Math.random() * fonts.length)];
		if (old === fontVar) {
			fontVar = fonts[Math.floor(Math.random() * fonts.length)];
		}
        console.log(fontVar)
	}, 1500);
</script>

<title>Skyblock Overhaul Update List</title>
<main id="main" class="font-sans bg-stone-200 h-screen overflow-hidden">
	<div id="one" class="grid place-content-center h-screen">
		<a href="#four">
			<div
				class="transition-all text-stone-800 grid place-content-center w-96 h-44 cursor-pointer rounded-md"
				on:click={() => {
					document.getElementById('main')?.classList.add('h-max');
					document.getElementById('main')?.classList.remove('h-screen');
					document.getElementById('two')?.classList.add('fixed');
					console.log('overflow turned on');
				}}
				on:mouseenter={() => {
					svgFill = '#1f2937';
					document.getElementById('svgContainer')?.classList.add('translate-y-2');
					//document.getElementById('hello')?.classList.add('-translate-y-4');
				}}
				on:mouseleave={() => {
					svgFill = '#00000000';
					document.getElementById('svgContainer')?.classList.remove('translate-y-2');
					//document.getElementById('hello')?.classList.remove('-translate-y-4');
				}}
			>
				<h1 id="hello" class="text-6xl cursor-inherit text-inherit transition {fontVar}">
					{helloVar}
				</h1>
				<div id="svgContainer" class="transition flex justify-center">
					<svg
						version="1.1"
						id="downArrow"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 20.633 20.633"
						style="enable-background:new 0 0 20.633 20.633;"
						xml:space="preserve"
						width="40"
						height="40"
					>
						<path
							id="downArrowPath"
							fill={svgFill}
							d="M10.79,15.617l9.648-9.646c0.133-0.131,0.195-0.301,0.195-0.473s-0.062-0.344-0.195-0.473l-0.012-0.012
                    c-0.125-0.127-0.295-0.195-0.472-0.195h-4.682c-0.18,0-0.348,0.068-0.473,0.195l-4.48,4.479l-4.48-4.479
                    C5.711,4.886,5.54,4.818,5.366,4.818H0.684c-0.182,0-0.349,0.068-0.475,0.195L0.196,5.025C0.068,5.148,0,5.322,0,5.498
                    c0,0.176,0.068,0.348,0.196,0.473l9.648,9.646C10.108,15.88,10.53,15.88,10.79,15.617z"
						/>
					</svg>
				</div>
			</div>
		</a>
	</div>
	<div id="two" class="overflow-hidden top-0 w-full grid place-content-center bg-stone-300 ">
		<div id="nav" class="block">
			<a href="#four" class="text-2xl">
				<div
					class="transition-all inline-block p-2 m-2 h-full hover:bg-stone-400 hover:text-sky-900 hover:p-4 hover:m-0"
				>
					Slayer Quests
				</div>
			</a>
			<a href="#five" class="text-2xl">
				<div
					class="transition-all inline-block p-2 m-2 h-full hover:bg-stone-400 hover:text-sky-900 hover:p-4 hover:m-0"
				>
					Mining
				</div>
			</a>
			<a href="#six" class="text-2xl">
				<div
					class="transition-all inline-block p-2 m-2 h-full hover:bg-stone-400 hover:text-sky-900 hover:p-4 hover:m-0"
				>
					Weapons
				</div>
			</a>
			<a href="#seven" class="text-2xl">
				<div
					class="transition-all inline-block p-2 m-2 h-full hover:bg-stone-400 hover:text-sky-900 hover:p-4 hover:m-0"
				>
					Miscellaneous
				</div>
			</a>
			<a href="#eight" class="text-2xl">
				<div
					class="transition-all inline-block p-2 m-2 h-full hover:bg-stone-400 hover:text-sky-900 hover:p-4 hover:m-0"
				>
					More Misc
				</div>
			</a>
		</div>
	</div>
	<div id="four" class="h-screen-20" />
	<div id="four-j" class="h-screen-10">
		<div class="block text-center mb-10 text-4xl">Slayer Quests</div>
	</div>
	<div id="four-a" class="grid place-content-center">
		<img src="https://media.discordapp.net/attachments/796158096463888404/1022999844824027166/unknown.png" alt="Enderman Slayer">

		<br>- Added Absoloute Enderpearl
		<br>- Added End Portal Fumes
		<br>- Added Enderman Cortex Rewriter
		<br>- Added Etherwarp Conduit
		<br>- Added etherwarp Merger
		<br>- Added Exccedingly Rare Ender Artifact Upgrader
		<br>- Added Handy Blood Chalice
		<br>- Added Hazmat Enderman
		<br>- Added Lesser and Regular Soulflow Engine
		<br>- Added Pocket Espresso Machine
		<br>- Added Sinful Dice
		<br>- Added Soulflow Pile
		<br>- Added Soulflow Supercell
		<br>- Added Terminator
		<br>- Added Transmission Tuner
		<br>- Added Twilight Arrow Poison
		<br>- Added Judgement Core
		<div class="pb-4" />
		
		<h2 class="text-2xl pb-2">Zombie / Wolf / Spider Slayer</h2>
		<br>- Added Zombie Mixin'
		<br>- Added Spider Mixin'
		<br>- Added Wolf Mixin'
		<br>- Added Warden Heart
		<br>- Added Venom's Touch
		<br>- Added Soul's Rebound
		<br>- Added Spider Quen's Stinger
		<br>- Added Soul String
		<br>- Added Dark Queen's Soul
		<br>- Added Arachne Crystal, Arachne Keeper Fragment and Arachne Fragment
		<br>- Added Braided Griffin Feather
		<br>- Added Beheaded Horror
		<br>- Added Reaper Mask
		<br>- Added Reaper Armor
		<br>- Added Tesselated Ender Pearl
		<br>- Added True Essence
		<div class="pb-4" />

		<h2 class="text-2xl pb-2">Changed Textures</h2>
		<br>- Changed Voidedge, Vorpal and Atomsplit Katana
		<br>- Changed Groomlock Grimoire
		<br>- Changed Juju Shortbow
		<br>- Changed Revenant Falchion
		<br>- Changed Reaper Falchion
		<br>- Changed Reaper Scythe
		<br>- Changed Revenant Armor
		<br>- Changed Sinseeker Scythe
		<br>- Changed Revenant Viscera
		<br>- Changed Spider and Wolf Slayer Drops and Items
		<br>- Changed Voodoo Doll
		<br>- Changed Toxic Arrow Poison
		<br>- Changed Digested Mosqutio
		<br>- Changed Flyswatter
		<br>- Changed Foul Flesh
		<br>- Changed Golden Powder
		<br>- Changed Tarantual Web
		<br>- Changed Weird Tuba
		<br>- Changed Voodoo Doll
		<br>- Changed Wolf Catalyst
		<br>- Changed Grizzly Bait
		<br>- Changed Hamster Wheel
		<div class="pb-4" />
	</div>
	<div id="five" class="h-screen-20" />
	<div id="five-j" class="h-screen-10">
		<div class="block text-center mb-10 text-4xl">Mining</div>
	</div>
	<div class="grid place-content-center"><img src="https://media.discordapp.net/attachments/796158096463888404/1022999845201522798/unknown.png" alt="Crystal Hollows"></div>
	<div id="five-a" class="grid place-content-center">
		<br>- Added Amber Piece
		<br>- Added Amber, Amethyst, Jasper, Ruby and Sapphire Power Scrolls
		<br>- Added Ammonite Helix
		<br>- Added Ascension Rope
		<br>- Added Bio Fuel and Oil
		<br>- Added Blue Cheese Omellete
		<br>- Added Pesto Goblin Omelette
		<br>- Added Spicy Goblin Omellette
		<br>- Added Sunny Side Up Goblin Omelette
		<br>- Added Blue Goblin Egg
		<br>- Added Green Goblin Egg
		<br>- Added Red Goblin Egg
		<br>- Added Yellow Goblin Egg
		<br>- Added Bob-Omb
		<br>- Added Corleonite
		<br>- Added Divan Fragment
		<br>- Added Gemstone Gauntlet
		<br>- Added Gemstone Mixture
		<br>- Added Gemstone Powder
		<br>- Added Golden Dragon Egg
		<br>- Added Jungle Key
		<br>- Added Metal detector
		<br>- Added Mysterious Meat
		<br>- Added Pickonimbus 2000
		<br>- Added Prehistoric Egg
		<br>- Added Quick Claw
		<br>- Added Recall Potion
		<br>- Added Sludge Juice
		<br>- Added Treasurite
		<br>- Added Wishing Compass
		<br>- Added Yoggie
		<br>- Added Divan Drill
		<br>- Added Jasper Drill
		<br>- Added Topaz Drill
		<br>- Added Ruby Drill
		<br>- Added Salvaged Golden Hammer
		<br>- Added Salvaged Lapis Sword
		<br>- Added Scavenged Diamond Axe
		<br>- Added Scavenged Emerald Hammer
		<br>- Added Divan Armor
		<br>- Added Ember Ash Armor
		<br>- Added Flamebreaker Armor
		<br>- Added Heat Armor
		<br>- Added Yog Armor
		<br>- Added Gem Drills
		<br>- Added Gem Tank
		<br>- Added Perfectly Cut Gem Tank
		<br>- Added Jungle Heart
		<br>- Added Concentrated Stone
		<br>- Added Refined Mineral
		<br>- Added Divan Alloy
		<br>- Added Gemstone Chamber
		<br>- Added Silex
		<div class="pb-4" />
	</div>
	<div class="grid place-content-center"><img src="https://media.discordapp.net/attachments/796158096463888404/1022999845545451630/unknown.png" alt="Dwarven Mines"></div>
	<div class="grid place-content-center">
		<br>- Added Bewjewled Handle
		<br>- Added Golden Plate
		<br>- Added Mithril Plate
		<br>- Added Titanium Talisman and its Upgrades
		<br>- Added Spelunker Potion
		<br>- Added Goblin Omellete
		<br>- Added all Power Beacon stages (from 1 - 5)
		<br>- Aadded Power Crystal
		<br>- Added Fuel Tank, Mithril Infused Tank and Titanium Infused Tank
		<br>- Added Bandaged Mithril Pickaxe
		<br>- Added Fractured Mithril Pickaxe
		<br>- Added Mithril Pickaxe
		<br>- Added Refined Mithril Pickaxe
		<br>- Added Petrified Starfall
		<br>- Added Rock Gemstone
		<br>- Added Titanium
		<br>- Added Refined Titanium Pickaxe
		<br>- Added Titanium
		<br>- Added Refined Titanium
		<br>- Added Mithril
		<br>- Added Refined Mithril
		<br>- Added Perfectly Cut Fuel Tank
		<br>- Added Pioneer Pickaxe
		<br>- Added Titanium Drill RX 655
		<br>- Added Mithril Powder
		<div class="pb-4" />
	</div>
	<div id="six" class="h-screen-20" />
	<div id="six-j" class="h-screen-10">
		<div class="block text-center mb-10 text-4xl">Weapons</div>
	</div>
	<div class="grid place-content-center"><img src="https://media.discordapp.net/attachments/796158096463888404/1022999846292050032/unknown.png" alt="Additions"></div>
	<div id="six-a" class="grid place-content-center">
		<br>- Thick Wooden Sword
		<br>- Warped Aspect of the Void
		<br>- Artisanal Shortbow
		<br>- Celeste Wand
		<br>- Spook Wand
		<br>- Jerrychine Gun
		<br>- Pumpkin Launcher
		<br>- Snow Cannon
		<br>- Snow Launcher
		<br>- Starlight Wand
		<br>- Cheap Coffee
		<br>- Soda
		<br>- Green Tea
		<br>- Ice Tea
		<br>- Armor Shred Arrow
		<br>- Bouncy Arrow
		<br>- All Ore tipped Arrows
		<br>- Explosive Arrow
		<br>- Nansorb Arrow
		<br>- Icy Arrow
		<br>- Dark Claymore
		+++ Much More Arrows and Items
		<div class="pb-4" />
	</div>
	<div class="grid place-content-center"><img src="https://media.discordapp.net/attachments/796158096463888404/1023000685354156104/image_15.png" alt="Changes"></div>
	<div class="grid place-content-center">
		<br>- Hunter Knife
		<br>- Cactus Knife
		<br>- Edible Mace
		<br>- Aspect of the Jerry (Thick version as well)
		<br>- Golem Sword
		<br>- Leaping Sword
		<br>- End Sword
		<br>- Endstone Sword
		<br>- Prismarine Blade
		<br>- Raider and Daedulus Axe
		<br>- Recluse Fang
		<br>- Rogue Sword
		<br>- Spider Sword
		<br>- Scorption Foil (Thick Version as well)
		<br>- Undead Sword
		<br>- Yeti Sword
		<br>- Ember Rod
		<br>- Explosive Bow
		<br>- Midas Staff
		<br>- Crypt Witherlord Sword
		<br>- Livid Dagger
		<br>- Silent Death
		<br>- Wither Cloak Sword
		<br>- Zombie Knight Sword and Cutlass
		<br>- Bonemerang
		<br>- Spirit Sword
		<br>- Bonzo Staff
		<br>- Ice Spray Wand
		<br>- Spirit Sceptre
		<br>- Necron's Blade (Unrefined)
		<br>- Valkryie
		<br>- Astraea 
		<br>- Hyperion
		<br>- Scylla 		
		<div class="pb-4" />
	</div>
	<div id="seven" class="h-screen-20" />
	<div id="seven-j" class="h-screen-10">
		<div class="block text-center mb-10 text-4xl">Misc</div>
	</div>
	<div class="grid place-content-center"><img src="https://media.discordapp.net/attachments/796158096463888404/1022999846292050032/unknown.png" alt="New Items"></div>
	<div id="seven-a" class="grid place-content-center">
		<br>- Added Rock Gemstone Powerstone
		<br>- Added Pure Mithril Power Stone
		<br>- Added Petrified Starfall Powerstone
		<br>- Added Glacite Jewel Powerstone
		<br>- Added Amber Piece Power stone
		<br>- Added Candy Corn Powerstone
		<br>- Added Hardened Wood Powerstone
		<br>- Added Bulky Stone Powerstone
		<br>- Added Beating Heart Powerstone
		<br>- Added Blessed Fruit Powerstone
		<br>- Added Dark Orb Powerstone
		<br>- Added Diamond Atom Powerstone
		<br>- Added Jaderald Powerstone
		<br>- Added Hotstuff Powerstone
		<br>- Added Dragon Claw Powerstone
		<br>- Added Dirt Cup Powerstone
		<br>- Added Golden Ball Powerstone
		<br>- Added Dragon Scales Powerstone
		<br>- Added Giant Tooth Powerstone
		<br>- Added Dragon Horn Powerstone
		<br>- Added Red Nose Powerstone
		<br>- Added Precursor Gear Powerstoen
		<br>- Added Endstone Geode Powerstone
		<br>- Added Red Scarf Powerstone
		<br>- Added Premium Flesh Powerstone
		<br>- Added Optical Lense Powerstone
		<br>- Added Refined Amber Powerstone
		<br>- Added Warped Stone Powerstone
		<br>- Added Wither Blood Powerstone
		<br>- Added Suspicious Vial Powerstone
		<br>- Added Necromancer's Brooch Powerstone
		<br>- Added Sadan's Brooch Powerstone
		<br>- Added Midas' Jewel Powerstone
		<br>- Added Lucky Die Powerstone
		<br>- Added Molten Cube Powerstone
		<br>- Added Luxurious Spool Powerstone
		<br>- Added Onyx Powerstone
		<br>- Added Spirit Stone Powerstone
		<br>- Added Jerrystone Power Stone
		<br>- Added Salmon Opal Powerstone
		<br>- Added Hazmat Enderman Powerstone
		<br>- Added Deepsea Orb Powerstone
		<br>- Added Rare Diamond Powerstone
		<br>- Added Blaze Slayer Swords
		<div class="pb-4" />
	</div>
	<div class="grid place-content-center"><img src="https://media.discordapp.net/attachments/796158096463888404/1022999845914542120/unknown.png" alt="Changes"></div>
	<div class="grid place-content-center">
		<br>- Changed Pure Mithril Powerstone
		<br>- Changed Booster Cookie
		<br>- Changed Regular and Hyper Catalyst
		<br>- Changed Griffin Feather
		<br>- Changed Diamond Spreading
		<br>- Changed Normal, Grand, Titanic, Colossal XP Bottles
		<div class="pb-4" />
	</div>

	<div id="eight" class="h-screen-20" />
	<div id="eight-j" class="h-screen-10">
		<div class="block text-center mb-10 text-4xl">Other Misc</div>
	</div>
	<div class="grid place-content-center"><img height="5" src="https://media.discordapp.net/attachments/796158096463888404/1022999845914542120/unknown.png" alt="Changes & Additions"></div>
	<div id="eight-a" class="grid place-content-center">
		<br>- Revamped Emerald Blade 
		<br>&nbsp&nbsp&nbsp&nbsp + Added an extra two versions for a 'Broke Emerald Blade', and a 'Rich Emerald Blade'.
		<br>&nbsp&nbsp&nbsp&nbsp The ‘Broke Emerald Blade’ texture will apply if there is less than 200 million coins in the purse.
		<br>&nbsp&nbsp&nbsp&nbsp The 'Default Emerald Blade' texture will apply if there is at least 550 million coins in the purse.
		<br>&nbsp&nbsp&nbsp&nbsp The 'Rich Emerald Blade' texture will apply if there is at least 2 BILLION coins or more in the purse.
		<br>
		<br>- Revamped Midas' Sword and Midas' Staff
		<br>&nbsp&nbsp&nbsp&nbsp + added an extra FIVE new textures on top of the revamped one. Here's how they will appear according to how much was paid for the Midas' Sword: 
		<br>&nbsp&nbsp&nbsp&nbsp 1. The lowest tier of Midas' Sword will only appear if it was paid with anything less than one million coins. 
		<br>&nbsp&nbsp&nbsp&nbsp 2. The second tier of Midas' Sword will Appear if it was paid with at least 10 million. 
		<br>&nbsp&nbsp&nbsp&nbsp 3. The third tier of Midas' Sword will appear if it was paid with at least 20 million coins.
		<br>&nbsp&nbsp&nbsp&nbsp 4. The fourth tier will appear if it was paid with at least 30 million coins. 
		<br>&nbsp&nbsp&nbsp&nbsp 5. The fifth tier will appear if it was paid with at least 40 million coins.
		<br>&nbsp&nbsp&nbsp&nbsp 6. The sixth tier will only appear if paid with 50 million or more.
	</div>
	<div class="pb-16" />
</main>
