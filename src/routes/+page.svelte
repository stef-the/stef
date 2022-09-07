<script>
    import { onMount } from 'svelte';

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
        'font-[Monaco]',
        'font-[Didot]',
        'font-[Copperplate]',
    ]
    let fontVar = '';
    let svgFill = '#00000000';

    const helloFont = [];

	setInterval(() => {
		helloVar = hello[Math.floor(Math.random() * hello.length)];
        fontVar = fonts[Math.floor(Math.random() * fonts.length)];
	}, 1500);
</script>

<main id="main" class="font-sans bg-stone-200 h-screen overflow-hidden">
	<div id="one" class="grid place-content-center h-screen">
        <a href="#two">
            <div
                class="transition text-stone-800 grid place-content-center w-96 h-44 cursor-pointer rounded-md"
                on:click={() => {
                    document.getElementById('main')?.classList.add('h-max');
                    document.getElementById('main')?.classList.remove('h-screen');
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
                <h1 id="hello" class="text-6xl cursor-inherit text-inherit transition {fontVar}">{helloVar}</h1>
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
                        <g>
                            <path
                                id="downArrowPath"
                                fill="{svgFill}"
                                d="M10.79,15.617l9.648-9.646c0.133-0.131,0.195-0.301,0.195-0.473s-0.062-0.344-0.195-0.473l-0.012-0.012
                    c-0.125-0.127-0.295-0.195-0.472-0.195h-4.682c-0.18,0-0.348,0.068-0.473,0.195l-4.48,4.479l-4.48-4.479
                    C5.711,4.886,5.54,4.818,5.366,4.818H0.684c-0.182,0-0.349,0.068-0.475,0.195L0.196,5.025C0.068,5.148,0,5.322,0,5.498
                    c0,0.176,0.068,0.348,0.196,0.473l9.648,9.646C10.108,15.88,10.53,15.88,10.79,15.617z"
                            />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                    </svg>
                </div>
            </div>
        </a>
	</div>
    <div id="two" class="grid place-content-center h-screen-10 bg-stone-100 ">
        <div id="nav" class="block">
            <div class="transition inline-block p-2 hover:text-sky-900">
                <a href="#one" class="text-2xl">a</a>
            </div>
            <div class="transition inline-block p-2 hover:text-sky-900">
                <a href="#one" class="text-2xl">b</a>
            </div>
        </div>
    </div>
	<div id="three" class="grid place-content-center h-screen-90">height</div>
</main>
