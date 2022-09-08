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

<title>Stef's</title>
<main id="main" class="font-sans bg-stone-200 h-screen overflow-hidden">
	<div id="one" class="grid place-content-center h-screen">
		<a href="#jump-proficiencies">
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
			<a href="#jump-proficiencies" class="text-2xl">
				<div
					class="transition-all inline-block p-2 m-2 h-full hover:bg-stone-400 hover:text-sky-900 hover:p-4 hover:m-0"
				>
					Proficiencies
				</div>
			</a>
		</div>
	</div>
	<div id="jump-proficiencies" class="h-screen-20" />
	<div id="three" class="h-screen-10">
		<div class="block text-center mb-10 text-4xl">Proficiencies</div>
	</div>
	<div id="four" class="grid place-content-center h-screen-70">
		<div id="blockContainer" class="block">
			<div class="cursor-pointer transition-all inline-block bg-stone-300 h-64 w-44 text-2xl m-2">
				<div class="grid h-full w-full">
					<div
						class="grid place-content-center h-[86.1%] w-[80%] m-[10%] hover:h-full hover:w-full hover:m-0 transition-all hover:bg-stone-400 hover:text-sky-900"
					>
						Python
					</div>
				</div>
			</div>
			<div class="cursor-pointer transition-all inline-block bg-stone-300 h-64 w-44 text-2xl m-2">
				<div class="grid h-full w-full">
					<div
						class="grid place-content-center h-[86.1%] w-[80%] m-[10%] hover:h-full hover:w-full hover:m-0 transition-all hover:bg-stone-400 hover:text-sky-900"
					>
						Javascript
					</div>
				</div>
			</div>
			<div class="cursor-pointer transition-all inline-block bg-stone-300 h-64 w-44 text-2xl m-2">
				<div class="grid h-full w-full">
					<div
						class="grid place-content-center h-[86.1%] w-[80%] m-[10%] hover:h-full hover:w-full hover:m-0 transition-all hover:bg-stone-400 hover:text-sky-900"
					>
						French
					</div>
				</div>
			</div>
			<div class="cursor-pointer transition-all inline-block bg-stone-300 h-64 w-44 text-2xl m-2">
				<div class="grid h-full w-full">
					<div
						class="grid place-content-center h-[86.1%] w-[80%] m-[10%] hover:h-full hover:w-full hover:m-0 transition-all hover:bg-stone-400 hover:text-sky-900"
					>
						English
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="three" class="grid place-content-center h-screen" />
</main>
