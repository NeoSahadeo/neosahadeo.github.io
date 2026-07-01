<script lang="ts">
	import DarkIcon from '../icons/DarkIcon.svelte';
	import { cache_control } from '$lib/scripts/storage';
	import { onMount } from 'svelte';
	import LightIcon from '../icons/LightIcon.svelte';
	import Button from './Button.svelte';

	let checked = $state(true);
	const dark_theme = "caramellatte";
	const light_theme = "halloween";

	const load = () => {
		const theme =
			cache_control({
				name: 'data-theme',
				method: 'get'
			}) ?? dark_theme;
		document.documentElement.setAttribute('data-theme', theme);
		checked = theme !== dark_theme;
	};

	onMount(() => {
		load();
	});
</script>

<Button
	className="btn btn-primary"
	onclick={() => {
		if (checked) {
			cache_control({
				name: 'data-theme',
				method: 'set',
				data: dark_theme
			});
		} else {
			cache_control({
				name: 'data-theme',
				method: 'set',
				data: light_theme
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
</Button>
