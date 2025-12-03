<script lang="ts">
	import { url_resolver } from '$lib/scripts/urlResolver';
	import { onMount } from 'svelte';
	import ThemeSwitch from '../buttons/ThemeSwitch.svelte';
	import { update_loading_state } from '$lib/state.svelte';

	let drawer_input = $state<HTMLInputElement>();
	let drawer_show = $state(false);

	function toggle_drawer() {
		drawer_input?.click();
	}

	// function toggle_drawer() {
	// 	if (drawer_show) {
	// 		drawer_input?.click();
	// 		setTimeout(() => {
	// 			drawer_show = !drawer_show;
	// 		}, 200);
	// 	} else {
	// 		drawer_show = !drawer_show;
	// 		setTimeout(() => {
	// 			drawer_input?.click();
	// 		}, 50);
	// 	}
	// }

	const links = [
		['Home', url_resolver('self')],
		['Docs', url_resolver('self') + 'docs'],
		['Projects', url_resolver('self') + 'projects'],
		['Tutorials', url_resolver('self') + 'tutorials'],
		['Blogs', url_resolver('self') + 'blogs'],
		['Videos', url_resolver('self') + 'videos']
	];
</script>

<div class="drawer">
	<input bind:this={drawer_input} id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<button
			aria-label="Menu"
			class="btn btn-ghost btn-circle drawer-button"
			onclick={toggle_drawer}
		>
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
					d="M4 6h16M4 12h16M4 18h7"
				/>
			</svg>
		</button>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<div class="flex h-full w-full flex-row">
			<ul class="menu bg-base-200 text-base-content min-h-full w-80 gap-4 p-4">
				{#each links as link}
					<li>
						<button class="btn btn-outline" onclick={() => window.location.assign(link[1]!)}
							>{link[0]}</button
						>
					</li>
				{/each}
				<div class="mt-auto flex flex-row">
					<button
						class="btn btn-outline btn-secondary"
						onclick={() => window.location.assign(url_resolver('self') + 'settings')}
					>
						Settings</button
					>
					<div class="ml-auto">
						<ThemeSwitch />
					</div>
				</div>
			</ul>
			<button
				aria-label="Menu"
				class="btn bg-base-300 mr-10 h-full border-1 border-white px-3 text-xl"
				onclick={toggle_drawer}
			>
				&lt;
			</button>
		</div>
	</div>
</div>
