<script lang="ts">
	import { onMount } from 'svelte';
	import { url_resolver } from '$lib/scripts/urlResolver';
	import handle_page_blur from '$lib/scripts/handlePageBlur';

	let cat_image_src = $state('');
	let cat_loaded = $state(false);
	const shared_image_css = 'md:h-96 md:w-96 w-82 h-82 ';

	const hello_locales = [
		'Hello', // English
		'Bonjour', // French
		'Привет', // Russian
		'こんにちは', // Japanese
		'你好', // Chinese (Mandarin)
		'Hola', // Spanish
		'Hallo', // German/Dutch
		'Sawubona', // Zulu
		'Ciao', // Italian
		'Olá', // Portuguese
		'مرحبا', // Arabic
		'हेलो', // Hindi
		'שלום', // Hebrew
		'Hej', // Swedish/Danish
		'Xin chào', // Vietnamese
		'Selamat', // Malay/Indonesian
		'Kamusta', // Filipino/Tagalog
		'Szia', // Hungarian
		'Γειά' // Greek
	];
	let word_display = $state('');
	const get_random_greeting = () => hello_locales[Math.floor(Math.random() * hello_locales.length)];

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function swap_words() {
		for (;;) {
			const g = get_random_greeting();
			for (let x = 0; x < g.length; x++) {
				word_display += g[x];
				await sleep(100);
			}
			await sleep(2000);
			for (let x = 0; x < g.length; x++) {
				word_display = word_display.slice(0, g.length - x - 1);
				await sleep(100);
			}
		}
	}

	const forward_blur = (e: Event) => handle_page_blur(e, 'Home | NeoSahadeo');

	onMount(async () => {
		try {
			const response = await fetch('https://api.thecatapi.com/v1/images/search', {
				method: 'GET'
			});
			if (response.ok) {
				cat_image_src = (await response.json())[0].url;
			}
		} catch (err) {
			console.error(err);
		}
		swap_words();
		document.removeEventListener('blur', forward_blur);
		document.addEventListener('blur', forward_blur);
		document.addEventListener('focus', forward_blur);
		document.title = 'Home | Neo Sahadeo';
	});
</script>

<section class="flex flex-col items-center px-4 md:px-0">
	<div class="flex flex-col gap-3 md:gap-5">
		<h1 class="relative text-2xl font-bold md:text-4xl">
			<span class="cursor-blink">{word_display}</span> &nbsp;&nbsp;👋
		</h1>
		<h2 class="text-xl font-semibold">I'm Neo, and here's a cat.</h2>
		<figure>
			{#if !cat_loaded}
				<div class={'skeleton ' + shared_image_css}></div>
			{/if}
			<img
				src={cat_image_src}
				alt=""
				class={'rounded object-cover ' + shared_image_css + (cat_loaded ? '' : 'hidden')}
				onload={() => {
					cat_loaded = true;
				}}
			/>
			<figcaption class="text-xs">
				Powered by <a href="https://thecatapi.com/" target="_blank" class="link-info font-bold"
					>TheCatApi</a
				>
			</figcaption>
		</figure>
		<div>
			<p>
				I’m a <span class="italic">Professional Slop-Dev 💅</span>
				a proud architect of glorious chaos in the codebase.
			</p>
			<br />
			<p>
				I incorporate the latest <span class="font-black">clanker</span> technologies like a digital
				alchemist akin to
				<a href="https://www.youtube.com/@NileRed" class="link-success" target="_blank">NileRed</a>,
				blending outdated relics with cutting-edge tools in a way that feels feels like a caveman
				hitting two rocks together.
			</p>
			<br />
			<p>
				I create educational tutorials, blogs, and videos on less explored topics and things I feel
				could and should be covered in better detail.
			</p>
			<ul class="list-[disc] pl-5">
				<li><a class="link-info" href={url_resolver('self') + 'tutorials/'}>Tutorials</a></li>
				<li>Blogs</li>
				<li>Videos</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.cursor-blink::after {
		content: ' ';
		position: absolute;
		width: 0.3em;
		height: 110%;
		background-color: white;
		animation: blink 0.7s infinite alternate;
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
		49% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
</style>
