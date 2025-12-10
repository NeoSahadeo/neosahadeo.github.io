<script lang="ts">
	import PageTitle from '$lib/components/headings/PageTitle.svelte';
	import { cache_control } from '$lib/scripts/storage';
	import { update_style } from '$lib/scripts/css';
	import { onMount } from 'svelte';
	import WarningIcon from '$lib/components/icons/WarningIcon.svelte';

	let settings = $state<any>({});
	let css_fullscreen = $state(false);

	$effect(() => {
		if (css_fullscreen) {
			document.body.style.overflowY = 'hidden';
		}
	});

	onMount(() => {
		settings.max_width = cache_control({
			name: 'max_width',
			method: 'get'
		});
		settings.color_override = cache_control({
			name: 'global_style_override',
			method: 'get'
		});
		document.title = 'Settings | Neo Sahadeo';
	});
</script>

<section class="flex min-w-full flex-col items-start gap-3 px-3">
	<PageTitle title="Settings" />
	<p>Customize the different aspects of the site. All saved to your browser's local storage.</p>
	<div class="divider divider-primary"></div>
	<div>
		<p>Page Width</p>
		<input
			type="number"
			class="input"
			bind:value={settings.max_width}
			oninput={() => {
				cache_control({
					name: 'max_width',
					method: 'set',
					data: settings.max_width
				});
			}}
		/>
	</div>
	<div class="flex flex-col">
		<p>Override CSS</p>
		<textarea
			class={`input resize ${css_fullscreen ? 'absolute top-0 left-0 h-dvh w-full pt-2' : ''}`}
			style={`${css_fullscreen ? 'z-index: 999;' : ''}`}
			bind:value={settings.color_override}
			onkeyup={() => {
				if (!settings.color_override) {
					cache_control({
						name: 'global_style_override',
						method: 'delete'
					});
				} else {
					cache_control({
						name: 'global_style_override',
						method: 'set',
						data: settings.color_override ? settings.color_override : ''
					});
				}
				update_style();
			}}
		>
		</textarea>
		<button
			onclick={() => (css_fullscreen = !css_fullscreen)}
			class={`btn ${css_fullscreen ? 'absolute top-4 right-4' : 'my-2 ml-auto'}`}
			style={`${css_fullscreen ? 'z-index: 9999;' : ''}`}
		>
			{#if css_fullscreen}
				Exit Fullsceen
			{:else}
				View in Fullsceen
			{/if}
		</button>
	</div>
	<div>
		<p>Cache Control</p>
		<button
			class="btn btn-error"
			onclick={() => {
				cache_control({ name: '', method: 'clear' });
				document.location.reload();
			}}
		>
			<WarningIcon />
			Clear Local Storage
		</button>
	</div>
</section>
