<script lang="ts">
	import { url_resolver } from '$lib/scripts/urlResolver';
	import { onMount } from 'svelte';
	import ThemeSwitch from '../buttons/ThemeSwitch.svelte';
	import { update_loading_state } from '$lib/state.svelte';
	import Button from '../buttons/Button.svelte';

	let drawer_input = $state<HTMLInputElement>();

	function toggle_drawer() {
		drawer_input?.click();
	}

	const links = [
		['Home', url_resolver('self')],
		// ['Docs', url_resolver('self') + 'docs'],
		['Projects', url_resolver('self') + 'projects'],
		['Tutorials', url_resolver('self') + 'tutorials'],
		['Blogs', url_resolver('self') + 'blogs'],
		['Videos', url_resolver('self') + 'videos'],
		['Resources', url_resolver('self') + 'resources']
	];
</script>

<div class="drawer">
	<input bind:this={drawer_input} id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<Button
			aria-label="Menu"
			className="btn btn-ghost btn-circle drawer-button"
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
		</Button>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<div class="flex h-full w-full flex-row">
			<ul class="menu bg-base-200 text-base-content min-h-full w-80 gap-4 p-4">
				{#each links as link}
					<li>
						<Button className="btn btn-neutral" onclick={() => window.location.assign(link[1]!)}
							>{link[0]}</Button
						>
					</li>
				{/each}
				<div class="mt-auto flex flex-row">
					<Button
						className="btn btn-secondary"
						onclick={() => window.location.assign(url_resolver('self') + 'settings')}
					>
						Settings</Button
					>
					<div class="ml-auto">
						<ThemeSwitch />
					</div>
				</div>
			</ul>
			<Button
				aria-label="Menu"
				className="btn bg-base-300 mr-10 h-full border border-white px-3 text-xl"
				onclick={toggle_drawer}
			>
				&lt;
			</Button>
		</div>
	</div>
</div>
