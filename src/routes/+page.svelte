<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	let loaded = $state(false);
	const shared_img_c = 'md:h-52 w-full rounded-lg';
</script>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="flex max-w-md flex-col gap-3">
			<h1 style="font-size: 2em !important;" class="text-5xl font-bold">/~$ Neo Sahadeo</h1>
			{#if !loaded}
				<div class={`skeleton ${shared_img_c}`}></div>
				<!-- <div class="skeleton h-4 w-full"></div> -->
				<!-- <div class="skeleton h-4 w-full"></div> -->
			{/if}

			<img
				class={`object-cover ${shared_img_c} ${loaded ? 'block' : 'hidden'}`}
				alt="CAT!"
				src="https://i.imgur.com/YqV4scs.jpeg"
				onload={() => {
					loaded = true;
				}}
			/>
			{#if loaded}
				<div class="flex gap-2"></div>
				<p class="w-full overflow-hidden text-xl text-ellipsis" style="font-size: 2em !important;">
					Hello Everynan!
				</p>
			{/if}
		</div>
	</div>
</div>
