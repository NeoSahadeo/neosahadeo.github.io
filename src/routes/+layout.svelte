<script lang="ts">
	import('../app.css');
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import {
		get_loading_states,
		get_max_width,
		get_is_protected,
		set_is_protected,
		update_loading_state
	} from '$lib/state.svelte';
	import { onMount } from 'svelte';
	import { url_resolver } from '$lib/scripts/urlResolver';
	import { update_style } from '$lib/scripts/css';
	import Loading from '$lib/components/loading/Loading.svelte';
	import { loading_state } from '$lib/state.svelte';

	const protected_pages = ['settings'];

	onMount(() => {
		update_loading_state('layout', true);
		if (
			protected_pages.filter((e) => window.location.href === url_resolver('self') + e).length === 0
		) {
			set_is_protected(false);
		}
		update_style();
		update_loading_state('layout', false);
	});

	$effect(() => {
		const loading_states = get_loading_states();
		if (loading_states.filter((e) => e[1]).length === 0) {
			document.body.style.overflow = '';
			loading_state.set(false);
		} else {
			document.body.style.overflow = 'hidden';
			loading_state.set(true);
		}
	});

	let { children } = $props();
</script>

{#if loading_state.get()}
	<style>
		* {
			overflow: hidden;
		}
	</style>
	<Loading />
{/if}
<main class="flex min-h-dvh w-full flex-col gap-10">
	<Header />
	<div
		class={`w-full py-20 ` + (get_is_protected() ? '' : 'mx-auto')}
		style={`max-width: ${get_is_protected() ? -1 : get_max_width()}px; flex-grow:1`}
	>
		{#if get_is_protected()}
			<div class="my-3 ml-2">
				<div class="badge badge-warning px-3 py-3">Page slider disabled on protected pages</div>
			</div>
		{/if}
		{@render children()}
	</div>
	<Footer />
</main>

<style>
</style>
