<script lang="ts">
	import { onMount } from 'svelte';

	const base = 'Loading Content';
	let display = $state('');

	let element = $state<HTMLHeadingElement>();
	onMount(() => {
		let count = 0;
		let x = setInterval(() => {
			if (count == 0) {
				display = base;
			}
			try {
				// @ts-ignore
				element.innerText = display.padEnd(18, ' ');
			} catch (err) {
				clearInterval(x);
			}

			count++;
			display += '.';
			if (display.length > 18) {
				count = 0;
			}
		}, 500);
	});
</script>

<main
	class="bg-base-100 absolute top-0 left-0 flex h-screen w-screen items-center justify-center text-center"
	style="z-index: 9999;"
>
	<h1 bind:this={element} class="text-2xl font-black text-nowrap md:text-4xl">.</h1>
</main>
