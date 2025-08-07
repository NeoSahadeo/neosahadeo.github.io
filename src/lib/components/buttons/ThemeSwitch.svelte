<script lang="ts">
	import DarkIcon from '../icons/DarkIcon.svelte';
	import { cache_control } from '$lib/scripts/storage';
	import { onMount } from 'svelte';
	import LightIcon from '../icons/LightIcon.svelte';

	let checked = $state(true);

	const load = () => {
		const theme =
			cache_control({
				name: 'data-theme',
				method: 'get'
			}) ?? 'sunset';
		document.documentElement.setAttribute('data-theme', theme);
		checked = theme !== 'sunset';
	};

	onMount(() => {
		load();
	});
</script>

<button
	class="btn btn-primary"
	onclick={() => {
		if (checked) {
			cache_control({
				name: 'data-theme',
				method: 'set',
				data: 'sunset'
			});
		} else {
			cache_control({
				name: 'data-theme',
				method: 'set',
				data: 'light'
			});
		}
		load();
	}}
>
	{#if checked}
		<LightIcon />
	{:else}
		<DarkIcon />
	{/if}
</button>
