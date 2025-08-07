<script lang="ts">
	import PageTitle from '$lib/components/headings/PageTitle.svelte';
	import { cache_control } from '$lib/scripts/storage';
	import { update_style } from '$lib/scripts/css';
	import { onMount } from 'svelte';
	import WarningIcon from '$lib/components/icons/WarningIcon.svelte';

	const settings = $state<any>({});

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
	<div>
		<p>Color Override (CSS)</p>
		<textarea
			class="input"
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
