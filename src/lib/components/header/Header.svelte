<script lang="ts">
	import Drawer from './Drawer.svelte';
	import { set_max_width, update_loading_state, get_is_protected } from '$lib/state.svelte';
	import { onMount } from 'svelte';
	import { cache_control } from '$lib/scripts/storage';
	let slider_value = $state(0);

	const default_width = () => Math.floor(window.innerWidth * 0.9);

	const update_width = () => {
		update_loading_state('header', true);
		const x = cache_control({
			name: 'max_width',
			method: 'get'
		});
		if (!x) {
			cache_control({
				name: 'max_width',
				method: 'set',
				data: String(default_width())
			});
		}
		const y = x ? parseInt(x) : default_width();
		slider_value = (100 * y) / window.innerWidth;
		set_max_width(slider_value * window.innerWidth * 0.01);
		update_loading_state('header', false);
	};

	let mounted = false;
	$effect(() => {
		if (mounted || get_is_protected()) return;
		mounted = true;
		update_width();
	});
</script>

<header class="navbar bg-base-100 no-print fixed z-50 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<Drawer />
		</div>
	</div>
	<div class="navbar-center">
		{#if !get_is_protected()}
			<input
				type="range"
				min="0"
				max="100"
				bind:value={slider_value}
				class="range"
				oninput={() => {
					const v = slider_value * window.innerWidth * 0.01;
					cache_control({
						name: 'max_width',
						method: 'set',
						data: String(v)
					});
					set_max_width(v);
				}}
			/>
		{/if}
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</button>
	</div>
</header>
